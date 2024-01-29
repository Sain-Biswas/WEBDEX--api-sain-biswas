import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        global._connectionStatus = true;
    } catch (error) {
        console.log(error)
    }
};

export default connectMongoDB;