const { Router } = require('express');
const controllers = require("../controllers");
const middleware = require("../middlewares");

const router = Router();

router.get("/", controllers.getFilms);
router.get("/:id", controllers.getOneFilm);
router.post("/", middleware.filmsValidation, controllers.createFilms);



module.exports = router;