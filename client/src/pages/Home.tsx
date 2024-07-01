import { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutCard from "../components/WorkoutCard";

export type Workout = {
  _id: number;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
};

const Home = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/workouts");
      const json = await res.json();

      if (res.ok) {
        setData(json);
        console.log(json);
      } else {
        console.error("Error fetching data:", res.status);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="home-container">
      <div className="home">
        {data &&
          data.map((workout: Workout) => (
            <WorkoutCard key={workout._id} workoutData={workout} />
          ))}
      </div>

      <WorkoutForm />
     
    </section>
  );
};

export default Home;
