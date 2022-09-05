const db = require("../../database/models");
const { validationResult } = require("express-validator");


module.exports = {
  create: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Movie.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genre_id,
      })
        .then((movie) => {
          let response = {
            meta: {
              status: 201,
              endpoint: "/api/movies/" + movie.id,
            },
            data: movie,
          };
          res.status(201).json(response);
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    } else {
        let requestErrorsResponse = {
            meta: {
                status: 400,
                errorMessage: "Datos enviados inválidos"
            },
            errors: [errors.mapped()]
        }
        res.status(400).json(requestErrorsResponse)
    }
  },
  destroy: (req, res) => {},
};
