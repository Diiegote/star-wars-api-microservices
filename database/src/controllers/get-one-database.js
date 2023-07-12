const { response } = require("../utils");
const store = require("../database");

module.exports = async ({ params }, res) => {
   const { model, id } = params;
   const data = await store[model].get(id);
   res.json(data);
}