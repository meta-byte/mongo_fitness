var path = require("path")

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/HTML/index.html"))
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/HTML/stats.html"))
    });

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/HTML/exercise.html"))
    })

}