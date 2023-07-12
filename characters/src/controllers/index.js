const { catchedAsync } = require("../utils")

module.exports = {
   getCharacters: catchedAsync(require('./getCharacters')),
   createCharacters: catchedAsync(require('./createCharacters')),
   getOneCharacters: catchedAsync(require('./getOneCharacters'))
}