import 'dotenv/config'
import express from 'express'
import { Container } from 'inversify'
import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
import './subscribers.controller'
import mongoose from 'mongoose'
import { subscribersModel } from './subscribers.model'

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
