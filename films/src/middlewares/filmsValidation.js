const { ClientError } = require("../utils/errors");


module.exports = (req, res, next) => {
   const { title, _id, opening_crawl, director, producer, release_date } = req.body;
   
   if (_id || title || opening_crawl || director || producer || release_date) return next();
   else throw new ClientError("Completa todos los campos", 401);
};