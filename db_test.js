const { db_init, db_create, db_getUserMMR, db_addUserMMR, db_addNewUser } = require("./db_controller")
// db_create("Users")
setTimeout(() => db_init("Users"), 1000)
setTimeout(() => db_getUserMMR("bob4sad"), 2000)
setTimeout(() => db_addUserMMR("bob4sad", 100), 3000)
setTimeout(() => db_getUserMMR("bob4sad"), 4000)
setTimeout(() => db_addNewUser("bob4sad"), 5000)
setTimeout(() => db_getUserMMR("bob4sad"), 6000)
setTimeout(() => db_addUserMMR("bob4sad", 100), 7000)
setTimeout(() => db_getUserMMR("bob4sad"), 8000)


