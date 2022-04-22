const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    subject:String,
    message:String
})

const Task = mongoose.model('task',taskSchema);

module.exports = Task;
