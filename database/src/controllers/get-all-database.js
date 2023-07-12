const { response } = require("../utils");
const store = require("../database");


module.exports = async ({ params }, res) => {
   const { model } = params;
   const data = await store[model].list();
   res.json(data);
}