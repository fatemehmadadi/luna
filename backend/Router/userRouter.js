import express from "express";
import User from "../models/userModel";
import expressAsyncHandler from "express-async-handler";
import { genreteToken, isAuth } from "../utils";

const userRouter = express.Router();

userRouter.get('/createadmin', expressAsyncHandler(async (req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email: 'admin@gmail.com',
            password: '1234',
            isAdmin: true,
        });
        const creatUser = await user.save();

        res.send(creatUser);
    } catch (err) {
        res.status(500).send({ message: err.message });
    };
}));

userRouter.post('/login', expressAsyncHandler(async (req, res) => {
    const signUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (!signUser) {
        res.status(401).send({
            message: "ایمیل یا پسورد اشتباه است"
        });
    } else {
        res.send({
            _id: signUser.id,
            name: signUser.name,
            email: signUser.email,
            isadmin: signUser.isAdmin,
            token: genreteToken(signUser)
        });
    };
}));
userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    const createUser = await user.save();
    if (!createUser) {
        res.status(401).send({
            message: "ایمیل یا پسورد اشتباه است"
        });
    } else {
        res.send({
            _id: createUser.id,
            name: createUser.name,
            email: createUser.email,
            isadmin: createUser.isAdmin,
            token: genreteToken(createUser)
        });
    };
}));

userRouter.put('/:id', isAuth, expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(401).send({
            message: "کاربر یافت نشد"
        });
    } else {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.password = req.body.password || user.password
        const updatUser = await user.save();
        res.send({
            _id: updatUser.id,
            name: updatUser.name,
            email: updatUser.email,
            isadmin: updatUser.isAdmin,
            token: genreteToken(updatUser)
        });
    };
}));
export default userRouter;