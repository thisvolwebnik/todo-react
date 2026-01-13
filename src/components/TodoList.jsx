import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const { tasks = [], deleteTask, toggleTaskComplete } = props;

  const hasTask = true;

  if (!hasTask) {
    return <div className="todo__empty-message"></div>;
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          {...task}
          key={task.id}
          onClickDeleteTask={deleteTask}
          toggleTaskComplete={toggleTaskComplete}
        />
      ))}
    </ul>
  );
};
