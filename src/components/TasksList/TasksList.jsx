import React, { useState, useEffect } from "react";
// import moment from "moment";
import axios from "axios";

import { MyContext } from "../../context/MyContext";

import TaskItem from "./TaskItem";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated, setTaskUpdated] = useState(false);

  useEffect(() => {
    const apiUrl = `https://task-manager-react-a74e7-default-rtdb.firebaseio.com/tasks.json`;

    axios.get(apiUrl).then((Response) => {
      if (Response.data) {
        setTasks(Object.values(Response.data));
      }
    });
  }, [taskUpdated]);

  const handleComplete = (taskId) => {
    const apiUrl = `https://task-manager-react-a74e7-default-rtdb.firebaseio.com/tasks/${taskId}.json`;

    axios.patch(apiUrl, { status: "Completed" }).then((Response) => {
      setTaskUpdated(!taskUpdated);
    });
  };

  const handleDelete = (taskId) => {
    const apiUrl = `https://task-manager-react-a74e7-default-rtdb.firebaseio.com/tasks/${taskId}.json`;

    axios.delete(apiUrl, { status: "Completed" }).then((Response) => {
      setTaskUpdated(!taskUpdated);
    });
  };

  return (
    <MyContext.Provider
      value={{
        taskInfo: tasks,
        handleComplete,
        handleDelete,
      }}
    >
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3">
          <TaskItem />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default TodoList;
