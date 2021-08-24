import express, { json } from 'express';
import environment from './config/environment';

const app = express();
const { port } = environment;

app.use(json());

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
