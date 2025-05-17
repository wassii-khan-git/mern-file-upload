import mongoose from "mongoose";

const Connection = async () => {
  try {
    const connect = await mongoose.connect(`mongodb://127.0.0.1:27017/practice`);
    console.log('Database Connected Successfully');
    if (!connect) {
        console.log('Failed to connect');
    }
  } catch (error) {
    console.log(error);
  }
};

export default Connection;