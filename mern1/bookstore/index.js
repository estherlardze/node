import express from "express";
import dotenv from "dotenv";
import workoutsRoute from "./routes/workout.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method), next();
});



// routers
app.use("/api/workouts", workoutsRoute);



// connect to database
mongoose
  .connect(mongoURI)
  .then(() => {
    app.listen(port, () => {
      console.log(`connected to database and app is listenig on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
