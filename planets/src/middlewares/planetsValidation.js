const { ClientError } = require("../utils/errors");


module.exports = ({ body }, res, next) => {
   const { _id, name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water } = body;

   if (_id || name || rotation_period || orbital_period || diameter || climate || gravity || terrain || surface_water) return next();
   else throw new ClientError("Completa todos los campos", 401);
};