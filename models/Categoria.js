const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
});
module.exports = model('Categoria', categoriaSchema);
