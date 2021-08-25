import mongoose from '../config/database';

const schema = new mongoose.Schema({
    id: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

export const model = mongoose.model('Url', schema);
