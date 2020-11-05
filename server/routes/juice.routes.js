const juices = require('../controllers/juice.controllers');

module.exports = (app) => {
    app.get("/api/juices", juices.getAll)
    app.get("/api/juices/:id", juices.getOne)
    app.post("/api/juices", juices.create)
    app.put("/api/juices/:id", juices.update)
    app.delete("/api/juices/:id", juices.delete)
};