import mongoose from "mongoose";
import 'dotenv/config';

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};
export default connectdb;