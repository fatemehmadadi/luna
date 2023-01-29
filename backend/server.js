import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import bodyParser from "body-parser";
import userRouter from "./Router/userRouter";
import orderRouter from "./Router/orderRouter";
import productRouter from "./Router/productRouter"

mongoose.set('strictQuery', true);
mongoose.connect(config.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => { console.log('database conection'); }
).catch(err => {
  console.log(err.reason);
})

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", userRouter);
app.use('/api/orders', orderRouter);
app.use("/api/products",productRouter)
app.use((err, req, res, next) => {
  const status = err.name && err.name === 'ValidationError' ? 400 : 500;
  res.status(status).send({ message: err.message });
})

app.listen("3000", () => {
  console.log('success http://localhost:3000');
})
