const {check} = require("express-validator");

module.exports = [
    check("title").notEmpty().withMessage("Título requerido").bail()
    .isString().withMessage("Título inválido"),
    check("rating").notEmpty().withMessage("Rating requerido").bail()
    .isDecimal().withMessage("Sólo numeros"),
    check("awards").notEmpty().withMessage("Awards requerido").bail()
    .isNumeric().withMessage("Sólo numeros"),
    check("release_date").notEmpty().withMessage("Release_date requerido").bail(),
    check("length").isNumeric().withMessage("Sólo números"),
    check("genre_id").isNumeric().withMessage("Sólo números"),
]