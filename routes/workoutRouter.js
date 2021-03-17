const Router = require("express").Router();
const db = require("../models");

// Get all workouts
Router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// Get all workouts
Router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .sort({day: -1})
  .limit(7)
  .then(response => res.json(response))
  .catch(err => res.json(err));
});

// POST a new workout
Router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
  .then(response => res.json(response))
  .catch(err => res.json(err))
});

Router.put("/api/workouts/:id", function (req, res) {
  db.Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } })
    .then(response => res.json(response))
    .catch(err => res.json(err))
});

module.exports = Router;
