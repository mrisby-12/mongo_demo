const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'John Doe',
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    max: 150
  },
  isLame: Boolean,
  favoriteFood: {
    type: String,
    enum: ['Bacon', 'Pizza', 'Ice Cream', 'Cereal']
  }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel