import 'dotenv/config'
import express from 'express'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'

export async function bootstrap() {
  const container = new Container()
  const server = new InversifyExpressServer(container)

  server.setConfig((app)=>)
  return {}
}

bootstrap()
