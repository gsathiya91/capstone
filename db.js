require("dotenv").config();
const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//        await mongoose.connect(process.env.MONGODB_URI, {
//            useNewUrlParser: true,
//            useUnifiedTopology: true,
//        }) 
//        console.log("MongoDB connected successfully")
//     } catch (error) {
//         console.error("MongoDB connection Fail")
//     }
// }

const MONGO_URL=process.env.MONGO_URL;
 //connection
async function createConnection(){
    const client=new MongoClient(MONGO_URL)
    await client.connect();
    console.log('mongodb is connected')
    return client;
}

const client=await createConnection();
module.exports = connectDB;