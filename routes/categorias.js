const router = require('express').Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.obtenerCategorias);
router.post('/crear', categoriaController.crearCategoria);

module.exports = router;
