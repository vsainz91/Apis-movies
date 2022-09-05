const express = require('express');
const router = express.Router();
const { list, detail, genreMovies } = require('../../controllers/api/genresController');

router.get('/api/genres', list);
router.get('/api/genres/:id', detail);
router.get('/:id/movies', genreMovies);

module.exports = router