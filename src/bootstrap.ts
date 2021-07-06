import 'dotenv/config'
import 'reflect-metadata'
import { App } from './application'
import './subscribers.controller'

console.clear()
export async function bootstrap() {

  const app = new App()
  app.setup()

  // TODO: Fix MongoDB Failing at startup
  //  mongoose.model('Subscriber', subscribersModel)
  return app;
}

bootstrap()
