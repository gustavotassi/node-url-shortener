import express from 'express';
import { UrlService } from '../services/url-service';

export const redirectRouter = express.Router();
const urlService = new UrlService();

redirectRouter.get('/:code', async (request, response) => {
    const { code } = request.params;

    urlService
        .findByLongUrl(code)
        .then((url) => {
            if (!url) {
                return response.status(404).json({
                    error: 'Short URL not found',
                });
            }

            const long = url.get('longUrl');

            if (url && !long) {
                return response.status(404).json({
                    error: 'Base URL not found',
                });
            }

            return response.redirect(long);
        })
        .catch(() => {
            return response.status(500).json({
                error: 'Failed to fetch short URL',
            });
        });
});
