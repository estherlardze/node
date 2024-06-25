import { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

type Workout = {
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

  const deleteWorkout = async (id: number) => {
    await fetch(`http://localhost:4000/api/workouts/${id}`, {
      method: "DELETE",
    });
  };

  const editWorkout = async (id: number) => {
    await fetch(`http://localhost:4000/api/workouts/${id}`, {
      method: "PATCH",
    });
  };

  return (
    <section className="home-container">
      <div className="home">
        {data &&
          data.map((workout: Workout) => (
            <div className="workout" key={workout._id}>
              <h4 style={{ color: "#60a832" }}>{workout.title}</h4>
              <p>
                {" "}
                <strong>Reps(kg): </strong>
                {workout.reps}
              </p>
              <p>
                {" "}
                <strong>Load(kg): </strong>
                {workout.load}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{workout.createdAt}</p>
                <div style={{ display: "flex" }}>
                  <div onClick={() => deleteWorkout(workout._id)} style={{ cursor: "pointer" }}>
                    <MdDelete size={20} />
                  </div>
                  <div>
                    {" "}
                    <FaRegEdit size={20} style={{ cursor: "pointer" }} onClick={() => editWorkout(workout._id)}/>
                  </div>{" "}
                </div>
              </div>
            </div>
          ))}
      </div>

      <WorkoutForm />
    </section>
  );
};

export default Home;
