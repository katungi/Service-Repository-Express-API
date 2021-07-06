import 'dotenv/config'
import express from 'express'
import { Container } from 'inversify'
import 'reflect-metadata'
import { InversifyExpressServer } from 'inversify-express-utils'
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

  const container = new Container()
  const server = new InversifyExpressServer(container)

  server.setConfig((app) => {
    app.use(express.json())
  })

  const app = server.build()

  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
  })
  return {}
}

bootstrap()
