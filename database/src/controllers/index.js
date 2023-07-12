const { catchedAsync } = require("../utils")

module.exports = {
   getAllDatabase: catchedAsync(require('./get-all-database')),
   getOneDatabase: catchedAsync(require('./get-one-database')),
   create: catchedAsync(require('./create')),

}