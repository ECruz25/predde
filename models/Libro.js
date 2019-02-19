const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const libroSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  categoria: {
    type: Schema.ObjectId,
    ref: 'Categoria',
    required: true
  },
  photo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Libro', libroSchema);
