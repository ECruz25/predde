const model = require('mongoose').model;
const Libro = model('Libro');
const uuid = require('uuid');
const multer = require('multer');
const jimp = require('jimp');

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if (isPhoto) {
      next(null, true);
    } else {
      next(
        {
          message: 'That filetype is not supported'
        },
        false
      );
    }
  }
};

exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
  console.log('llegue a resize');
  if (!req.file) {
    next();
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;

  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, 755);
  await photo.write(`./client/public/uploads/${req.body.photo}`);
  next();
};

exports.crearLibro = async (req, res) => {
  console.log('llegue a crearLibro');
  try {
    if (req.body.precio > 0) {
      const libro = new Libro(req.body);
      await libro.save();
      res.send(200);
    } else {
      res.send(500);
    }
  } catch (error) {
    res.send(500);
  }
};

exports.obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.find();
    res.send(libros);
  } catch (error) {
    res.send(error);
  }
};

exports.obtenerLibrosPorCategoria = async (req, res) => {
  try {
    const libros = await Libro.find({ categoria: req.params.categoria });
    res.send(libros);
  } catch (error) {
    res.send(error);
  }
};

exports.obtenerLibroPorId = async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    res.send(libro);
  } catch (error) {
    res.send(error);
  }
};

exports.eliminarLibro = async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.send(200);
  } catch (error) {
    res.send(500);
  }
};

exports.modificarLibro = async (req, res) => {
  try {
    const nuevoLibro = req.body;
    await Libro.findByIdAndUpdate(req.params.id, nuevoLibro);
    res.send(200);
  } catch (error) {
    res.send(500);
  }
};
