import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, default: 0.0, required: true },
    brand: { type: String },
    rating: { type: Number, default: 0.0, required: true },
    numReviews: { type: Number, default: 0, required: true },
    availability: { type: Number, default: 0, required: true },
    discount: { type: Number, default: 0.0, required: true },
    page: { type: Number, default: 1, required: true },
    description: { type: String, required: true },
  }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
