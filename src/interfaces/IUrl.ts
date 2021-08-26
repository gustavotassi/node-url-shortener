/**
 * @typedef {{name: string}} IUrl
 * @param {{name: string}} id - Registry unique ID
 * @param {{name: string}} longUrl - Long URL (before shortening)
 * @param {{name: string}} shortUrl - Short URL (after shortening)
 * @param {{name: string}} date - Creation date
 */
export interface IUrl {
    longUrl: string;
    shortUrl: string;
    date?: string;
}
