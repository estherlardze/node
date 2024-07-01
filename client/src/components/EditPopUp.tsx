import { useState } from 'react';

const EditPopUp = ({ workoutData: initialWorkoutData, setOpenMenu }: any) => {
  const [workoutData, setWorkoutData] = useState(initialWorkoutData);
  const [error, setError] = useState<string | null>(null);

  const handleEdit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/api/workouts/${workoutData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: workoutData.title,
          reps: workoutData.reps,
          load: workoutData.load,
        }),
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      } else {
        setError(null);
        setOpenMenu(false);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setWorkoutData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="edit-popup-form">
      <form onSubmit={handleEdit}>
        <div className="workout-form">
          <label htmlFor="title">Exercise title:</label>
          <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            value={workoutData.title}
            onChange={handleChange}
          />
        </div>
        <div className="workout-form">
          <label htmlFor="reps">Exercise reps:</label>
          <input
            type="text"
            placeholder="repetition"
            id="reps"
            name="reps"
            value={workoutData.reps}
            onChange={handleChange}
          />
        </div>
        <div className="workout-form">
          <label htmlFor="load">Exercise load:</label>
          <input
            type="text"
            placeholder="load"
            id="load"
            name="load"
            value={workoutData.load}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="form-button">
          Edit workout
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default EditPopUp;
