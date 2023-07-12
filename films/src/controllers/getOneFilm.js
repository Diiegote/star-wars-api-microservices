const Films = require('../data');
const { response } = require('../utils');



module.exports = async ({ params }, res) => {
   const { id } = params;
   const films = await Films.listOne(id);
   response(res, 200, films);
};