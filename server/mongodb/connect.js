import mongoose from "mongoose"

const connectDB = async (url) => {
    try {
        const dbConn = await mongoose.connect(url);
        console.log("MongoDB connected!" ,dbConn.connection.host)
    } catch (err) {
        console.log(err);
    }

}
export default connectDB;