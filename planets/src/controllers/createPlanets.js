const Planets = require("../data");
const { response } = require("../utils");

module.exports = async ({ body }, res) => {
   const newPlanets = await Planets.create(body);
   response(res, 201, newPlanets);
};