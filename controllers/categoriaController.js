const model = require('mongoose').model;
const Categoria = model('Categoria');

exports.crearCategoria = async (req, res) => {
  try {
    const categoria = new Categoria(req.body);
    
    await categoria.save();
    res.send(200);
  } catch (error) {
    debugger;
    console.log(error);
    res.send(500);
  }
};

exports.obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.send(categorias);
  } catch (error) {
    res.send(error);
  }
};
