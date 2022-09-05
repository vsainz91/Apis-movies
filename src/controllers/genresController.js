const db = require('../database/models');
const fetch = require('node-fetch');

const genresController = {
    'list': (req, res) => {
            fetch("http://localhost:3001/api/genres")
            .then(res => res.json())
            .then(result => {
                res.render('genresList.ejs', {genres: result.data})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;