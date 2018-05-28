module.exports = () => {
    require("../models/task");
    return {
    readAll: (req, res)=>{
        Tasks.find({}, (err, data) =>{
                if(err){
                    console.log("There's an error");
                    res.json(err);
                }
                else {
                    console.log("Success");
                    res.json(data);
                }
            });
        },

    readOne:  (req, res)=>{
        Tasks.findOne({_id: req.params.id}, (err, data) =>{
            if(err){
                console.log("There's an error");
                res.json(err);
            }
            else {
                console.log('Success');
                res.json(data);
            }
        })
    },

    create:  (req, res) => {
        let newTask = new Tasks ({
            title: req.body.title,
            description: req.body.description
        });
        newTask.save(function(err, data){
            if(err){
                console.log("wrong");
                res.json(err);
            }
            res.redirect('/tasks');
        })
    },

    update:  (req, res) => {
        let updateInfo = {
            "title": req.body.title,
            "description": req.body.description,
            "completed": req.body.completed
        }
    
    Tasks.updateOne({_id: req.params.id}, updateInfo, (err, data) => {
        if(err){
            console.log("There's an error");
            res.json(err);
        }
        else {
            console.log("Success");
            res.json(data);
        }
    })

    },

    delete:  (req, res) => {
        Tasks.deleteOne({_id: req.params.id}, (err, data) =>{
            if(err){
                console.log("There's an error");
                res.json(err);
            }
            else {
                console.log("Success");
                res.json(data);
            }
        })
    }
  }
}
