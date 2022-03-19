import React from "react";
import SingleTodo from "../single-todo/Single-Todo";

const Todo = ({ todos, deleteBtn }) => {
  return (
    <div className="mt-5">
      <ul className="list-unstyled w-50 mx-auto">
        {todos.map((todo, index) => (
          <SingleTodo key={index} myObj={{ index, todo, deleteBtn }} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
