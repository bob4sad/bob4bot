const sqlite3 = require('sqlite3').verbose();
const file = "database" 

exports.db_create = (table_name) => {
    var db = new sqlite3.Database(file);
    var users = []
    console.log(users);
    var db = new sqlite3.Database(file);
    db.serialize(function() {
        db.run(`CREATE TABLE IF NOT EXISTS ${table_name} (username TEXT, mmr INT)`);
        db.run(`DELETE FROM ${table_name}`)
        var stmt = db.prepare(`INSERT INTO ${table_name} VALUES (?, ?)`);
        for (index in users) {
            stmt.run(users[index], 0);
        }
        stmt.finalize();
    })
    db.all("SELECT * FROM Users", (e, r) => console.log(r))
    db.close();
}

exports.db_init = (table_name) => {
    var db = new sqlite3.Database(file);

    db.all("SELECT name FROM sqlite_master WHERE type='table' AND name='Users'", 
        (e, r) => {
            if (r.length === 0) {
                console.log("oopps");
                this.db_create(table_name)
            } else {
                console.log("db ok");
            }
    })
    db.close();
}
exports.db_getUserMMR = (username) => {
    var db = new sqlite3.Database(file);
    db.all(`SELECT mmr FROM Users WHERE username='${username}'`,
        (e, r) => {
            if (r.length === 0) console.log("user does not exists");
            else console.log(r);
    })
    db.close();
}

exports.db_addUserMMR = (username, mmr) => {
    var db = new sqlite3.Database(file);
    db.all(`SELECT mmr FROM Users WHERE username='${username}'`,
        (e, r) => {
            if (r.length === 0) console.log("user does not exists");
            else if (r.length === 1){
                r = r[0]
                db.run(`UPDATE Users SET mmr=${r.mmr + mmr} WHERE username='${username}'`)
            }   
        }
    )
    
}

exports.db_addNewUser = (username) => {
    var db = new sqlite3.Database(file);
    db.all(`SELECT mmr FROM Users WHERE username='${username}'`,
        (e, r) => {
            if (r.length !== 0) console.log("user already exists");
            else {
                var db = new sqlite3.Database(file);
                db.serialize(function() {
                    var stmt = db.prepare(`INSERT INTO Users VALUES (?, ?)`);
                    stmt.run(username, 0);
                    stmt.finalize();
                })
                db.close();
                console.log("user added");
            }   
        }
    )
    db.close();
}
