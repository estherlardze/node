import WorkoutModel from "../models/workoutModel.js";
import mongoose from "mongoose";

// get all workouts
export const getWorkouts = async (req, res) => {
  try{
    const workouts = await WorkoutModel.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
 }
 catch(err){
   res.status(400).json({error: err.message})
 }
}


// get a single workout
export const getWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"})
  }

  const workout =await WorkoutModel.findById(id)

  if(!workout){
    return res.status(404).json({error: "No such workout"})
  }
  return res.status(200).json(workout)
}



// create a new workout
export const createWorkout = async (req, res) => {
  const {title, reps, load} = req.body;

  try{
    const workout = await WorkoutModel.create({title, reps, load});
    res.status(200).json(workout)
  }
  catch(err){
    res.status(400).json({error: err.message})
  }
}

// delete a workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"})
  }

  const workout =await WorkoutModel.findByIdAndDelete(id)

  if(!workout){
    return res.status(404).json({error: "No such workout"})
  }
  return res.status(200).json(workout)
}


// update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: "No such workout"})
  }

  const workout =await WorkoutModel.findByIdAndUpdate(id, {...req.body})

  if(!workout){
    return res.status(404).json({error: "No such workout"})
  }
  return res.status(200).json(workout)
}