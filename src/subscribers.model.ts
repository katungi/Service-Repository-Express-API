import mongoose = require('mongoose')

export const subscribersModel = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  subscribeToChannel: {
    type: String,
    required: true
  },

  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

export type Subscriber = typeof subscribersModel