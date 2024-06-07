import express from 'express'
import WorkoutModel from '../models/workoutModel.js'
const router = express.Router()


// get all workouts
router.get('/', (req, res) => {
    res.send('hello get')
})

// get a single workout
router.get('/:id', (req, res) => {
    res.send('hello get')
})


// post a workout
router.post('/', async(req, res) => {
    const { title, reps, load } = req.body

     try {
       const workout = WorkoutModel.create({title, reps, load})
       res.status(200).json(workout)
     }
     catch(error) {
        res.status(400).json({error: error.message})
     }
})

// modify a workout
router.put('/:id', (req, res) => {
    res.send('hello put')
})


// delete a workout
router.delete('/:id', (req, res) => {
    res.send('hello delete')
})


export default router