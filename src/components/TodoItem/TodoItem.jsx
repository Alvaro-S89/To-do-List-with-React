import React, { useContext } from "react";
import { TodoContext } from "../../context/TodosContext";
import "./TodoItem.css";

export const TodoItem = ({ todos, title }) => {
  const { todosList, setTodosList } = useContext(TodoContext);

  const deleteTodo = (todo) => {
    const { id } = todo;
    const filteredTodos = todosList.filter(
      (todoFromContext) => todoFromContext.id !== id
    );
    setTodosList(filteredTodos);
  };

  return (
    <div className="section-tasks">
      <div className="task">
        <h1>{title}</h1>
        {todos.map((todo) => {
          return (
            <div className="item-container" key={todo.id}>
              <p>Task: {todo.text}</p>
              <button className="removeBtn" onClick={() => deleteTodo(todo)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
