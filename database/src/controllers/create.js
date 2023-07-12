const { response } = require("../utils");
const store = require("../database");

module.exports = async ({ params, body }, res) => {
   const { model } = params;
   const object = body;
   const data = await store[model].insert(object);
   res.json(data);
}