import * as fs from 'fs';
import * as _ from 'lodash';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import { Router } from 'express';
import dev from '../environments';
import { loginBodyValidation, validateRequests, validateToken } from '../middlewares';

const router = Router();

const loginUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const usersList = fs.readFileSync('src/models/users.json', 'utf8');
        const parsedList = JSON.parse(usersList);
        const filterdUser = parsedList.find(user => user.username === username);
        if (_.isEmpty(filterdUser)) {
            return res.status(400).send({ message: "No User" });
        }

        const hashedPassword = crypto.createHmac("sha256", dev.JWT_SECRET).update(password).digest('hex');
        if (hashedPassword === filterdUser.password) {
            const token = jwt.sign({ id: filterdUser.id }, dev.JWT_SECRET, { expiresIn: '5s' });
            return res.status(200).send({ message: "User logged in", token });
        } else {
            return res.status(401).send({ message: "Invalid credentials" });
        }

    } catch (error) {
        next(error);
    }
}

const getProfile = async (req, res, next) => {
    try {
        const userId = req.decoded.id;
        const usersList = fs.readFileSync('src/models/users.json', 'utf8');
        const parsedList = JSON.parse(usersList).map(e => _.omit(e, ["password"]));
        const filterdUser = parsedList.find(user => user.id === userId);

        if (_.isEmpty(filterdUser)) {
            res.status(400).send({ profile: { message: "No profile found!" } });
        } else {
            res.status(200).send({ profile: filterdUser });
        }

    } catch (error) {
        next(error);
    }
}

router.post('/login', loginBodyValidation(), validateRequests, loginUser);
router.get('/profile', validateToken, getProfile);

export default router;
