import React from "react";

const TaskStateDDL = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="custom-select custom-select-sm"
    >
      <option value={"Not started"}>Not started</option>
      <option value={"In progress"}>In progress</option>
      <option value={"Completed"}>Completed</option>
      <option value={"Not completed"}>Not completed</option>
    </select>
  );
};

export default TaskStateDDL;
