import WorkoutModel from "../models/workoutModel.js";
import mongoose from "mongoose";

// get all workouts
export const getWorkouts = async (req, res) => {
  const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });

  res.status(200).json(workouts);
};


// get a single workout
export const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};


// create a workout
export const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  try {
    const workout = await WorkoutModel.create({ title, reps, load });
    res.status(200).json(workout);
    console.log(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// delete a workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findByIdAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};


// update a workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await WorkoutModel.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
  res.status(200).json(workout);
};
