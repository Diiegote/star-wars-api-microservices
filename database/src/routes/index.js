const { Router } = require("express");
const store = require("../database");
const { validateModel, validateId, validateData } = require("../middlewares");
const controllers = require("../controllers");

const router = Router();


router.get("/:model", validateModel, controllers.getAllDatabase);
router.get("/:model/:id", validateModel, validateId, controllers.getOneDatabase);
router.post("/:model", validateModel, validateData, controllers.create);

module.exports = router;