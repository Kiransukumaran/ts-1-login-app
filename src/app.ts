import * as express from 'express';
const app = express();

app.use('/', (req, res) => {
    res.json({
        message: 'Initial Code setup'
    })
});

export default app;
