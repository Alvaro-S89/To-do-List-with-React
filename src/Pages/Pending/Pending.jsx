import React, { useContext } from "react";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { TodoContext } from "../../context/TodosContext";

export const Pending = () => {
  const { todosList } = useContext(TodoContext);

  const pendingTodos = todosList.filter((todo) => todo.status === "pending");

  return (
    <div className="section-status">
      <TodoItem title="Pending" todos={pendingTodos}/>
    </div>
  );
};
