const express = require("express");
let app = express();
let db = require("./database.js");

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
        res.json({
            "message": "success",
            "data": rows
        });
    });
});

app.use((req, res) => {
    res.status(404);
});
