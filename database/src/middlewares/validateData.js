const { ClientError } = require("../utils/errors");


module.exports = async ({ body, params }, res, next) => {
   const { model } = params;
   const { _id, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, rotation_period, orbital_period, diameter, climate, gravity,
      terrain, surface_water, title, opening_crawl, director, producer, release_date } = body;

      
   if (model === "Character") {
      if (!_id || !name || !height || !mass || !hair_color || !skin_color || !eye_color || !birth_year || !gender) {
         next(new ClientError("Completá todos los campos", 400));
      } else next()
   }
   else if (model === "Film") {
      if (!_id || !title || !opening_crawl || !director || !producer || !release_date) {
         next(new ClientError("Completá todos los campos", 400));
      } else next()
   }
   else if (model === "Planet") {
      if (!_id || !name || !rotation_period || !orbital_period || !diameter || !climate || !gravity || !terrain || !surface_water) {
         next(new ClientError("Completá todos los campos", 400));
      } else next()
   }

};