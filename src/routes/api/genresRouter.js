const express = require('express');
const router = express.Router();
const { list, detail } = require('../../controllers/api/genresController');

router.get('/api/genres', list);
router.get('/api/genres/:id', detail);


module.exports = router