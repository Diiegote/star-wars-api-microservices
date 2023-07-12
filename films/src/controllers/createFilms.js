const Films = require("../data");
const { response } = require("../utils");

module.exports = async ({ body }, res) => {
   const newFilms = await Films.create(body);
   response(res, 201, newFilms);
};