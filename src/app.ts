import * as express from 'express';
import { Express } from 'express-serve-static-core';

class App {
    public express: Express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: 'Initial Code setup'
            })
        })
        this.express.use('/', router)
    }
}

export default new App().express
