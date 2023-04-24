import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const mongodbURL = process.env.MONGODB;

mongoose.connect(mongodbURL);

let db = mongoose.connection;

export default db