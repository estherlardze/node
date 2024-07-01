import {Schema, model} from 'mongoose';

 const WorkoutSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    reps : {
        type : Number,
        required : true
    },
    load : {
        type : Number,
        required : true
    }
}, {timestamps: true})


const WorkoutModel = model('Workout', WorkoutSchema)
export default WorkoutModel