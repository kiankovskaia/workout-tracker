const Router = require("express").Router();
const db = require("../models");


// Get all workouts
Router.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})

// Get all workouts
Router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})

// POST a new workout
Router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body, (err, data) => {
    if (err) {
      throw err
    }
    else {
      res.json(data)
    }
  })
})



Router.put('/api/workouts/:_id', function(req, res){

  db.Workout.findByIdAndUpdate(req.params._id, {$push: {"exercises": req.body}}, {"new": true, "upsert": true, "safe": true}, (err, data) => {
    if(data){
    console.log(data)
    console.log(req.params._id)
    console.log(req.body)
    res.status(200).json(data)
  
}else {res.json(err)}
    
  
  }
  )}

  
)


module.exports = Router;