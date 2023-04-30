import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask }) => {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));

  return (
    <div className="tasks">
      {/* Display a list of tasks using the Task component */}
      {taskList}
    </div>
  );
};

export default TaskList;
