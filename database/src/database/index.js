const mongoose = require('mongoose');
const { MONGO_URI } = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);


// Character.find()
//    .populate("films", ["_id", "title"])
//    .populate("homeworld", ["_id", "name"])
//    .then(res => console.log(res[0]));

module.exports = {
   Character: conn.model("Characters", require("./schemas/characterSchema")),
   Film: conn.model("Film", require("./schemas/filmSchema")),
   Planet: conn.model("Planet", require("./schemas/planetSchema"))
}