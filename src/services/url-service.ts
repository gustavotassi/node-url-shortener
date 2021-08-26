import { urlModel } from '../models';

export class UrlService {
    /**
     * Finds a document by its long url.
     * @param longUrl Long URL
     */
    async findByLongUrl(longUrl: string) {
        const url = await urlModel.findOne({
            longUrl,
        });

        return url;
    }
}
