const { Router } = require('express');
const controllers = require("../controllers");
const middleware = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);
router.get("/:id", controllers.getOneCharacters);
router.post("/", middleware.characterValidation, controllers.createCharacters);



module.exports = router;