import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "فیلد نام اجباری است"],
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "فیلد ایمیل اجباری است"],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: [true, "لطفا پسورد خود را وارد کنید"]
    },
});
const User = mongoose.model("User", userSchema);

export default User;