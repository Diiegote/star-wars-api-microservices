const Planet = require('../data');
const { response } = require('../utils');

module.exports = async ({ params }, res) => {
   const { id } = params;
   const planets = await Planet.listOne(id);
   response(res, 200, planets);
};