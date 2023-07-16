import React, { useState } from "react";
import TaskStateDDL from "./../Dropdown/TaskStateDDL";
import { v4 as uuidv4 } from "uuid";

const TaskCardAdd = ({ setShouldShowAddTaskCard, addATask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("Not started");

  const isSaveBtnDisabled = !taskName && !taskStatus;

  const handleSave = () => {
    setShouldShowAddTaskCard(false);
    if (taskName && taskStatus)
      addATask({
        id: uuidv4(),
        name: taskName,
        currState: taskStatus,
      });
  };

  const handleTypeStateChange = (e) => {
    const { value } = e.target;
    setTaskStatus(value);
  };

  const reset = () => {
    setTaskName("");
    setTaskStatus("");
  };

  return (
    <div className="card p-2">
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            class="form-control"
            name="taskName"
            // size={10}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="col-12 mt-4">
          <TaskStateDDL value={taskStatus} onChange={handleTypeStateChange} />
        </div>
        <div className="col-12 mt-2 text-center">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={handleSave}
            disabled={isSaveBtnDisabled}
          >
            Save
          </button>
          <button
            type="button"
            className="m-2 btn btn-outline-danger btn-sm"
            onClick={reset}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCardAdd;
