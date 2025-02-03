import mongoose from "mongoose";

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected");
    } catch (error) {
        console.log("DB connection error", error);
    }
};

export default dbconnection;
