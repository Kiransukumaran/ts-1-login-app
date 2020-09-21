import * as jwt from 'jsonwebtoken';
import dev from '../environments';

const validateToken = (req: any, res: any, next: () => void) => {
    if (!req.headers.authorization) {
        return res.status(400).send({
            success: false,
            message: 'Please provide token in authorization header'
        });
    }

    const authHeader = req.headers.authorization;
    if (authHeader.startsWith("Bearer ")) {
        const token = authHeader.substring(7, authHeader.length);
        jwt.verify(token, dev.JWT_SECRET, (err: Error, decoded: any) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: 'Invalid Token'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(400).send({
            success: false,
            message: 'Bearer is missing from the auth header'
        });
    }
};

export default validateToken;
