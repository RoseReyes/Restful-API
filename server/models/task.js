require("../config/mongoose");
var mongoose = require('mongoose');

module.exports = (() => {
    const TaskSchema = new mongoose.Schema({
        title:{type: String, required: true},
        description: {type: String},
        completed :{type: Boolean, default: false}
        }, {timestamps: true }); 
      Tasks = mongoose.model('tasks', TaskSchema)
})();