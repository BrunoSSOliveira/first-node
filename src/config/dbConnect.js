// import dotenv from 'dotenv';
// import mongoose from "mongoose";
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

const mongodbURL = process.env.MONGODB;

mongoose.connect(mongodbURL);

let db = mongoose.connection;

export default db