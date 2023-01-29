import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../Models/productModel'

const productRouter = express.Router();
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find();
    res.send(products);
  })
);
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (products) {
      res.send(products);
    } else {
      res.status(404).send({ message: ' page not found' })
    }
  })
);
export default productRouter;
