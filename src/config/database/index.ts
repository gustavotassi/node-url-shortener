import mongoose from 'mongoose';
import environment from '../environment';

const { dbUri } = environment;

mongoose.connect(dbUri);
mongoose.Promise = global.Promise;

export default mongoose;
