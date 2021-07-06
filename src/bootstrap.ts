import 'dotenv/config'
import 'reflect-metadata'
import './subscribers.controller'
import mongoose from 'mongoose'

console.clear()
export async function bootstrap() {

  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to the Database")
  }).catch((error) => {
    console.log(error)
  });

  //  mongoose.model('Subscriber', subscribersModel)
  return {}
}

bootstrap()
