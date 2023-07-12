const { Router } = require('express');
const controllers = require("../controllers");
const middleware = require("../middlewares");

const router = Router();

router.get("/", controllers.getPlanets);
router.get("/:id", controllers.getOnePlanet);
router.post("/", middleware.planetsValidation, controllers.createPlanets);



module.exports = router;