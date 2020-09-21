import * as fs from 'fs';
import * as _ from 'lodash';
import { Router } from 'express';

const router = Router();

// Get details of all users
const getAllUsers = async (req: any, res: any, next: any) => {
    try {
        const usersList = fs.readFileSync('src/models/users.json', 'utf8');
        const parsedResults = JSON.parse(usersList);
        res.status(200).send({ users: parsedResults.map((e: any) => _.omit(e, ["password"])) });
    } catch (error) {
        next(error);
    }
}

// Get detail of a user with Id
const getUser = async (req: any, res: any, next: any) => {
    try {
        const usersList = fs.readFileSync('src/models/users.json', 'utf8');
        const parsedList = JSON.parse(usersList).map((e: any) => _.omit(e, ["password"]));
        const filterdUser = parsedList.find((user: { id: number; }) => user.id === Number(req.params.id));

        if (_.isEmpty(filterdUser)) {
            res.status(400).send({ user: { message: "No user found!" } });
        } else {
            res.status(200).send({ user: filterdUser });
        }
    } catch (error) {
        next(error);
    }
}

export {
    getAllUsers,
    getUser
};
