const { ClientError } = require("../utils/errors");

module.exports = ({ params }, res, next) => {
   const { model } = params;
   if (["Character", "Film", "Planet"].includes(model)) return next();

   else throw new ClientError("Error en el nombre del modelo", 400);


};