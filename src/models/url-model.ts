import mongoose from '../config/database';
import { IUrl } from '../interfaces';

const schema = new mongoose.Schema({
    id: { type: String, required: true },
    longUrl: { type: String, required: true },
    shortUrl: { type: String, required: true },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export const urlModel = mongoose.model<IUrl>('Url', schema);
