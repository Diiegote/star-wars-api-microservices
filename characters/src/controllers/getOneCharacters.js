const Characters = require('../data');
const { response } = require('../utils');


module.exports = async ({params}, res) => {
   const {id} = params;
   const characters = await Characters.listOne(id);
   response(res, 200, characters);
};