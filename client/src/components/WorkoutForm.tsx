import React, { useState } from "react";

const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
 const [error, setError] = useState(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "load") {
      setLoad(e.target.value);
    }
    if (e.target.name === "reps") {
      setReps(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      body: JSON.stringify({ title, reps, load }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if(!res.ok) {
     setError(data.error);
    }

    if(res.ok) {
        setTitle('');
        setLoad('');
        setReps('');
        setError(null)
    }
  };

  return (
    <div>
      <h1>Add a New Workout</h1>
      <form action="">
        <div className="workout-form">
          <label htmlFor="title">Exersice title:</label>
          <input
            type="text"
            placeholder=" title"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="workout-form">
          <label htmlFor="reps">Exersice reps:</label>
          <input
            type="text"
            placeholder=" repeatition"
            id="reps"
            name="reps"
            value={reps}
            onChange={handleChange}
          />
        </div>
        <div className="workout-form">
          <label htmlFor="load">Exersice load:</label>
          <input
            type="text"
            placeholder="load"
            id="load"
            name="load"
            value={load}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="form-button" onClick={handleSubmit}>
          Add workout
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
