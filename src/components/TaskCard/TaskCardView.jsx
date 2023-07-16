import React, { useState } from "react";
import TaskStateDDL from "../Dropdown/TaskStateDDL";

const TaskCard = ({ task, taskState, updateATasks }) => {
  const { id, name } = task || {};

  const [taskStatus, setTaskStatus] = useState(taskState);

  const handleTypeStateChange = (e) => {
    const { value } = e.target;
    setTaskStatus(value);
    updateATasks({
      id,
      currState: value,
      prevState: taskState,
    });
  };

  return (
    <div className="card p-2 my-4 shadow-sm">
      <div className="row">
        <div className="col-12">
          <p>{name}</p>
        </div>
        <div className="col-12">
          <TaskStateDDL value={taskStatus} onChange={handleTypeStateChange} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
