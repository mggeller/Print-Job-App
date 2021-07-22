let sqlite = require('sqlite3').verbose();
let md5 = require('md5');

const DBSOURCE = "db.sqlite";

let db = new sqlite.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open the Database
        console.log(err.message);
        throw err;
    } else {
        console.log("Connected to the SQLite Database");
        db.run('CREATE TABLE printjobs ( \
            id INTEGER PRIMARY KEY AUTOINCREMENT, \
            person_name VARCHAR(40) NOT NULL, \
            created_at VARCHAR(40) NOT NULL, \
            duration INTEGER NOT NULL, \
            file_name VARCHAR(20) NOT NULL, \
            description VARCHAR(1024), \
            printer_model VARCHAR(20), \
            printer_type VARCHAR(20) \
            )', (err) => {
            if (err) {
                console.log("Table already exist");
            } else {
                let insert = 'INSERT INTO printjobs (person_name, created_at, duration, file_name, description, printer_model, printer_type) VALUES (?, ?, ?, ?, ?, ?, ?)';
                db.run(insert, ["Mihkel Raud", "22.07.2021 8:45:00", 6, "Music something", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "HP", "3D New Gen"]);
                db.run(insert, ["Markus Tamm", "25.07.2021 8:45:00", 2, "Building something", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "HP", "3D New Gen"]);
                db.run(insert, ["Hendrik Ilves", "22.08.2021 8:45:00", 16, "Developing something", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "HP", "3D New Gen"]);
                db.run(insert, ["Toomas Paju", "22.07.2021 10:45:00", 9, "Something something", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n \n It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", "HP", "3D New Gen"]);
            }
        });
    }
});

module.exports = db;