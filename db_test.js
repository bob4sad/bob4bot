const { db_init, db_create, db_getUserMMR, db_addUserMMR, db_addNewUser } = require("./db_controller")
db_create("Users")
db_getUserMMR('bob4sad').then(mmr => console.log(mmr));