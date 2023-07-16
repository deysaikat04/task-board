import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskCardView from "./TaskCard/TaskCardView";
import { updateAllTasks, addNewTask } from "../store/taskSlice";
import TaskCardAdd from "./TaskCard/TaskCardAdd";

export const Home = (props) => {
  const dispatch = useDispatch();

  const { taskStates, allTasks } = useSelector((state) => state.taskReducer);

  const colLength = taskStates && 12 / taskStates.length;

  const [shouldShowAddTaskCard, setShouldShowAddTaskCard] = useState(false);

  const updateATasks = (payload) => {
    dispatch(updateAllTasks(payload));
  };

  const addATask = ({ id, name, currState }) => {
    dispatch(addNewTask({ id, name, currState }));
  };

  return (
    <div className="container p-8">
      <div className="row">
        <div className="col">
          <div className="display-4">My Todo Board</div>
        </div>
        <div className="row p-8">
          {taskStates && taskStates.length ? (
            taskStates.map((aTaskState) => {
              return (
                <div className={`col-${colLength}`}>
                  <p>{aTaskState}</p>

                  {allTasks[aTaskState] && allTasks[aTaskState].length ? (
                    allTasks[aTaskState].map((aTask) => (
                      <TaskCardView
                        key={aTask.id}
                        task={aTask}
                        taskState={aTaskState}
                        updateATasks={updateATasks}
                      />
                    ))
                  ) : (
                    <></>
                  )}
                  {aTaskState === "Not started" ? (
                    <div className="col">
                      <button onClick={() => setShouldShowAddTaskCard(true)}>
                        +
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className="row p-8">
          <div className="col-3">
            {shouldShowAddTaskCard && (
              <TaskCardAdd
                setShouldShowAddTaskCard={setShouldShowAddTaskCard}
                addATask={addATask}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
