import * as express from 'express';
import controller from './controllers'
const app = express();

app.use('/', controller);

export default app;
