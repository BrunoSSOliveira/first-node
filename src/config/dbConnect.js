import mongoose from "mongoose";

mongoose.connect("mongodb+srv://brunno:Shaka123@cluster0.uevo7or.mongodb.net/first-node");

let db = mongoose.connection;

export default db