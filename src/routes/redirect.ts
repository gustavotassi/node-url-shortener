import express from 'express';
import { UrlService } from '../services/url-service';

export const redirectRouter = express.Router();
const urlService = new UrlService();

redirectRouter.get('/:code', async (request, response) => {
    const { code } = request.params;

    try {
        const url = await urlService.findByLongUrl(code);

        if (!url) {
            return response.status(404).json({
                error: 'Short URL not found!',
            });
        }

        console.log(url);

        return response.redirect('url');
    } catch (error) {
        return response.status(400).json({
            error: 'Failed to fetch short URL!',
        });
    }
});
