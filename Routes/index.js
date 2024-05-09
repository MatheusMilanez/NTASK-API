var express = require("express");
//endpoits
var status = 'Status: Ntask API';

module.exports = app => {
    app.get("/",(req,res)=>{
        res.json(status);
    })
}

module.exports = app => {
    const Tasks = app.Models.tasks;
    app.get("/tasks",(req, res)=>{
        Tasks.findAll({}, (tasks) => {
            res.json({tasks: tasks});
        })
    });
}


