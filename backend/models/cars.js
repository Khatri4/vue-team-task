const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  Brand: {
    type: String,
    required: true
  },
  Model: {
    type: String,
    required: true
  },
  Year: {
    type: Number,
    required: true
  },
  FuelType: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Hybrid', 'Electric'],
    required: true
  },
  Price: {
    type: Number,
    required: false
  },
  CarType: {
    type: String,
    enum: ['Sedan', 'SUV', 'Coupe'],
    required: true
  },
  Images: {
    type: [String],
    required: true
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;


