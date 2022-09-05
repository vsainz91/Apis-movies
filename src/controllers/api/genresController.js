const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const genresAPIController = {
    list: (req, res) => {
        db.Genre.findAll()
        .then((genres) => {
            let response = {
                meta:{
                    status: 200,
                    url: "/api/genres",
                    total: genres.length
                },
                data: genres
            }
            res.json(response)
        })
        .catch((error) => {
            let response = {
                meta:{
                    status: 400,
                    url: "/api/genres",
                },
                error: error
            }
            res.json(response)
        })
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
        .then((genre) => {
            let response = {
                meta:{
                    status: 200,
                    url: "/api/genres/" + req.params.id,
                },
                data: genre
            }
            res.json(response)
        })
        .catch((error) => {
            let response = {
                meta:{
                    status: 400,
                    url: "/api/genres",
                },
                error: error
            }
            res.json(response)
        })
    },
    genreMovies: (req, res) => {
        db.Genre.findByPk(req.params.id,{
            include: ['movies']
        })
        .then(genre => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: genre.length,
                    url: '/api/genre/:id/movies'
                },
                data: genre
            }
            res.json(respuesta);
        });
    }
}

module.exports = genresAPIController;