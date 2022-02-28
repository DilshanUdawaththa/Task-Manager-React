import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

function TaskItem() {
  const { taskInfo, handleComplete, handleDelete } = useContext(MyContext);

  return taskInfo.map((taskInfo) => {
    const borderColor = taskInfo.status === "Completed" ? "border-success" : "";

    return (
      <div className="col mb-2" key={taskInfo.id}>
        <div className={"card border " + borderColor}>
          <div className="card-header">
            <span className="card-title">{taskInfo.title}</span>
            <br />
            <span className="badge badge-pill badge-primary">
              {taskInfo.dueDate}
            </span>
          </div>
          <div className="card-body d-flex flex-column">
            <p className="card-text">{taskInfo.description}</p>
            <div className="mt-auto text-right">
              <button
                className="btn btn-danger btn-sm mr-2"
                onClick={() => handleDelete(taskInfo.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-success btn-sm "
                onClick={() => handleComplete(taskInfo.id)}
              >
                Complete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default TaskItem;
