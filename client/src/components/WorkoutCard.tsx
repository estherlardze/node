import { Workout } from "../pages/Home";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import EditPopUp from "./EditPopUp";

const WorkoutCard = ({ workoutData }: { workoutData: Workout }) => {
  const [openmenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(true);
  };

  const deleteWorkout = async (id: number) => {
    await fetch(`http://localhost:4000/api/workouts/${id}`, {
      method: "DELETE",
    });
  };


  return (
    <div className="workout" key={workoutData._id}>
      <h4 style={{ color: "#60a832" }}>{workoutData.title}</h4>
      <p>
        {" "}
        <strong>Reps(kg): </strong>
        {workoutData.reps}
      </p>
      <p>
        {" "}
        <strong>Load(kg): </strong>
        {workoutData.load}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{workoutData.createdAt}</p>
        <div style={{ display: "flex" }}>
          <div
            onClick={() => deleteWorkout(workoutData._id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete size={20} />
          </div>
          <div>
            {" "}
            <FaRegEdit
              size={20}
              style={{ cursor: "pointer" }}
              onClick={() => toggleMenu()}
            />
          </div>{" "}
        </div>
      </div>

      {openmenu && (
        <div className="edit-popup" >
            <EditPopUp
              workoutData={workoutData}
              setOpenMenu={setOpenMenu}
            />
          <div onClick={() => setOpenMenu(false)}></div>
        </div>
      )}
    </div>
  );
};

export default WorkoutCard;
