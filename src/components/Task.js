import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTask } from "../store/task/selectors";
import { useState } from "react";
import { completeToggle, deleteTask } from "../store/task/slice";
import "./style.css";

const Task = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);
  const [complated, setComplated] = useState(true);

  const handleOnChange = (id) => {
    dispatch(completeToggle(id));
  };
  const taskDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h1>Task List</h1>
      <select
        onChange={(e) => setComplated(e.target.value)}
        defaultValue={false}
      >
        <option value={complated}>Show Complated Task</option>
      </select>
      <div>
        Task Name:{" "}
        <ul className="lists">
          {tasks.map((item) => {
            return (
              <li key={item.id}>
                <h3>{item.task} </h3>{" "}
                <p>
                  <strong
                    style={{ color: item.completed ? "tomato" : "green" }}
                  >
                    {" "}
                    <input
                      type="checkbox"
                      // checked={item.completed ? true : false}
                      onChange={() => handleOnChange(item.id)}
                      checked={item.completed}
                    />
                  </strong>
                </p>
                <button onClick={() => taskDelete(item.id)}>Delete Task</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Task;
