import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const { tasks = [], deleteTask, toggleTaskComplete, filteredTasks } = props;

  const hasTask = tasks.length > 0;
  const isEmptyFilteredTasks = filteredTasks?.length === 0;

  if (!hasTask) {
    return <div className="todo__empty-message">There are no tasks yet</div>;
  }

  if (hasTask && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>;
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
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
