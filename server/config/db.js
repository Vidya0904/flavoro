const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // await mongoose.connect("mongodb+srv://vidyajaywant2000_db_user:vidya123@cluster0.bkxexjm.mongodb.net/?appName=Cluster0");
    await mongoose.connect("mongodb+srv://vidyajaywant2000_db_user:vidya123@cluster0.bkxexjm.mongodb.net/cartDB?retryWrites=true&w=majority");
    console.log("MongoDB Connected");

    console.log("Database:", mongoose.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;