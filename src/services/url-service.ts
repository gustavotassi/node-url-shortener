import shortId from 'shortid';
import { IUrl } from '../interfaces';
import { urlModel } from '../models';

export class UrlService {
    /**
     * Finds a document by its long url.
     * @param longUrl Long URL
     * @returns The URL that was found
     */
    public async findByLongUrl(shortUrl: string) {
        const url = await urlModel.findOne({
            shortUrl,
        });

        return url;
    }

    /**
     * Creates a new shortened URL
     * @param longUrl Long URL from client
     * @returns The created URL
     */
    public async storeUrl(longUrl: string) {
        const urlAlreadyExists = await urlModel.findOne({
            longUrl,
        });

        if (urlAlreadyExists) {
            return urlAlreadyExists;
        }

        const short = shortId.generate();

        const createObject: IUrl = {
            longUrl,
            shortUrl: short,
        };

        const url = await urlModel.create(createObject);

        return url;
    }
}
