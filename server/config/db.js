import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        let connect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlparser: true,
            useUnifiedTopology: true
        })
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDatabase