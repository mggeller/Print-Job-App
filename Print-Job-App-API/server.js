const express = require("express");
let app = express();
let db = require("./database.js");
let md5 = require("md5");
let bodyParser = require("body-parser");
let cors = require("cors");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

let HTTP_PORT = 8000;
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

app.get("/", (req, res, next) => {
    res.json({"message": "OK"})
});

app.get("/api/printjobs", (req, res, next) => {
    let sql = "select * from printjobs";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json(rows);
    });
});

app.post("/api/printjobs", (req, res, next) => {
    let errors = [];
    let data = {personName: req.body.person_name, 
                createdAt: req.body.start_at, 
                duration: req.body.duration,
                fileName: req.body.file_name,
                description: req.body.description,
                printerModel: req.body.printer_model,
                printerType: req.body.printer_type}

    let sql = 'INSERT INTO printjobs (person_name, start_at, duration, file_name, description, printer_model, printer_type) VALUES (?, ?, ?, ?, ?, ?, ?)';
    let params = [data.personName, data.createdAt, data.duration, data.fileName, data.description, data.printerModel, data.printerType];
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        });
    });

});

app.use((req, res) => {
    res.status(404);
});
