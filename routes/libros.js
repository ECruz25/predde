const router = require('express').Router();
const libroController = require('../controllers/libroController');

router.get('/', libroController.obtenerLibros);
router.get('/:id', libroController.obtenerLibroPorId);
router.get('/categoria/:categoria', libroController.obtenerLibrosPorCategoria);
router.post(
  '/crear',
  libroController.upload,
  libroController.resize,
  libroController.crearLibro
);
router.delete('/:id', libroController.eliminarLibro);
router.put('/:id', libroController.modificarLibro);

module.exports = router;
