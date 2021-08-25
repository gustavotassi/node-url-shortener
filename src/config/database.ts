import mongoose from 'mongoose';
import environment from './environment';

const { dbUri } = environment;

mongoose.connect(dbUri);

const connection = mongoose.connection;

export default { connection };
