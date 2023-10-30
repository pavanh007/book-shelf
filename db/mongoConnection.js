import mongoose from "mongoose";
import process from 'process';

const mongoConnect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true
      }
    );
    console.log("Connected to the mongoDB");
  } catch (error) {
    console.error(`${error.message} while connecting to database.`);
    process.exit(1);
  }
};

export default mongoConnect;
