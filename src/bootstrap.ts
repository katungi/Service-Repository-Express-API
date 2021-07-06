import 'dotenv/config'
import 'reflect-metadata'
import './subscribers.controller'
import mongoose from 'mongoose'
import {container} from './di-container'

console.clear()
export async function bootstrap() {

  //  mongoose.model('Subscriber', subscribersModel)
  return {}
}

bootstrap()
