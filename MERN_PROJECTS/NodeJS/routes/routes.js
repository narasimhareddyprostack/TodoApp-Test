const express = require('express');
const router = express.Router();
const Task = require('../model/model');

router.get('/',(req,res)=>{
   Task.find((err,doc)=>{
        if(err) throw err;
        res.json(doc)
   })
})

router.post('/',(req,res)=>{
    const task = new Task(req.body);
    task.save((err,doc)=>{
        if(err) throw err;
        res.json(doc);
    })
})

router.put('/:id',(req,res)=>{
    Task.findOneAndUpdate({
        _id:req.params.id
    },req.body,{
        new:true
    },(err,doc)=>{
        if(err) throw err;
        res.json(doc)
    })
})

router.delete('/:id',(req,res)=>{
    Task.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err) throw err;
        res.json(doc)
    })
})

module.exports = router;