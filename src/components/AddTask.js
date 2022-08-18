import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../store/task/slice";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const createTask = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addNewTask(task));
    setTask("");
  };

  return (
    <div>
      <form onSubmit={createTask}>
        <label>
          <strong style={{ color: "tomato" }}>Add New Task</strong>
        </label>
        <br></br>
        <br></br>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTask;
