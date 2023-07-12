const { ClientError } = require("../utils/errors");
const store = require("../database");

module.exports = async ({ params }, res, next) => {
   const { id, model } = params;
   const data = await store[model].get(id);
   if (data) return next();
   else next(new ClientError("No se encontro el Id", 400));

}