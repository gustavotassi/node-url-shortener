import express from 'express';
import validUrl from 'valid-url';
import { UrlService } from '../services/url-service';

export const urlRouter = express.Router();
const urlService = new UrlService();

urlRouter.post('/shorten', async (request, response) => {
    const { baseUrl } = request.body;

    if (!validUrl.isUri(baseUrl)) {
        return response.status(400).json({
            error: 'Invalid base URL',
        });
    }

    urlService
        .storeUrl(baseUrl)
        .then((url) => {
            const short = url.get('shortUrl');

            if (url && !short) {
                return response.status(500).json({
                    error: 'Failed to find short URL',
                });
            }

            return response.json({
                shortUrl: short,
            });
        })
        .catch(() => {
            return response.status(400).json({
                error: 'Failed to shorten URL',
            });
        });
});
