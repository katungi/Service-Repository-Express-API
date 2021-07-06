import mongoose from "mongoose";

export class DBService {
  async connect() {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log("Connected to the Database")
    }).catch((error: Error) => {
      console.log(error)
    });
  }
}