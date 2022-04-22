const express = require('express');
const router = express.Router();
const Task = require('../model/model');

router.get('/',(req,res)=>{
    const task = new Task({
        name:'karthik',
        email:'karthi@gmail.com',
        number:'54153143513',
        subject:'Hello subject',
        message:'Message field'
    })
    task.save((err,doc)=>{
        if(err) throw err;
        console.log(doc)
    })
})

module.exports = router;