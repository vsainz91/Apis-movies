const express = require("express");
const router = express.Router();
const { create, destroy, recomended, list, detail, update} = require("../../controllers/api/moviesController");
const moviesValidator = require('../../validations/movieValidator');

router.get('/api/movies/', list);
router.get('/api/movies/:id', detail);
router.get('/api/movies/recomended/:rating', recomended);
router.post('/api/movies/create', moviesValidator, create);
router.put('/api/movies/update/:id', update);
router.delete('/api/movies/delete/:id', destroy);


module.exports = router