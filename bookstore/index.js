import express from 'express';
import {mongoDbUri} from './config.js'
import mongoose from 'mongoose';

const app = express();
const port = 3000


mongoose.
connect(mongoDbUri)
.then(() => {
    console.log("app connected to database")
    app.listen(port, 
        console.log(`server is running on port ${port}`          
        ))
})
.catch((err) => console.log(err))

