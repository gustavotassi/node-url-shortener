import cors from 'cors';
import express, { json } from 'express';
import environment from './config/environment';
import { redirectRouter, urlRouter } from './routes';

const app = express();
const { port } = environment;

app.use(cors());

app.use(json());

app.use(urlRouter);
app.use(redirectRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
