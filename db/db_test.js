const { db_init, db_create, db_getUserStats, db_addUserMMR, db_addNewUser } = require("./db_controller")
db_create("Users")
db_getUserStats('bob4sad').then((mmr, wins, loses) => console.log(mmr, wins, loses));
db_addNewUser("bob4sad")
db_getUserStats('bob4sad').then((mmr, wins, loses) => console.log(mmr, wins, loses));
