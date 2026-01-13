import { AddTaskForm } from "./AddTaskForm";
import { SearchTaskForm } from "./SearchTaskForm";
import { TodoInfo } from "./TodoInfo";
import { TodoList } from "./TodoList";
import { useState } from "react";

export const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Купить молоко", isDone: true },
    { id: "task-2", title: "Купить хлеб", isDone: false },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      };

      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  const deleteAllTasks = () => {
    const isConfirm = confirm("Are you sure you want to delete all?");

    if (isConfirm) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }

        return task;
      }),
    );
  };

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm />
      <TodoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        deleteAllTasks={deleteAllTasks}
      />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskComplete={toggleTaskComplete}
      />
    </div>
  );
};
