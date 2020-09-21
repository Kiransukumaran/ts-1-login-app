import { param, validationResult, body } from 'express-validator';

const paramValidation = () => {
    return param('id').exists().isNumeric();
}

const loginBodyValidation = () => {
    return [
        body('username').exists().isString().isLowercase(),
        body('password').exists().isString()
    ];
}

const validateRequests = (req: any, res: any, next: () => any) => {
    const error = validationResult(req);

    if (error.isEmpty()) {
        return next();
    }

    return res.status(422).send({ error: "Validation failed" })
}

export {
    paramValidation,
    validateRequests,
    loginBodyValidation
}
