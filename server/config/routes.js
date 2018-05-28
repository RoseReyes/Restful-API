
var c = require("../controllers/tasks")();

module.exports = (app) =>{
    app.get("/tasks", (req, res) =>{
        c.readAll(req, res);
    });
    app.get("/tasks/:id", (req, res) =>{
        c.readOne(req, res);
    });
    app.post("/tasks", (req, res) =>{
        c.create(req, res);
    });
    app.put("/tasks/:id", (req, res) =>{
        c.update(req, res);
    });
    app.delete("/tasks/:id", (req, res) =>{
        c.delete(req, res);
    });
}