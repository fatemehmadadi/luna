import config from "./config"
import jwt from "jsonwebtoken"

export const genreteToken = (user) => {
    return jwt.sign({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, config.JWT_SECRET
    );
};

export const isAuth = (req, res, next) => {
    const BearerToken = req.headers.authorization;
    if (!BearerToken) {
        res.status(401).send({ message: "توکن برای شما ارائه نشده" });
    } else {
        const token = BearerToken.slice(7, BearerToken.length);
        jwt.verify(token, config.JWT_SECRET, (err, data) => {
            if (err) {
                res.status(401).send({ message: "توکن نامعتبر" });
            } else {
                req.user = data;
                next();
            };
        });
    };
};