import React, { useState } from "react";
import SearchBox from "../search-box/Search-Box";
import Todo from "../todo/Todo";

const Home = () => {
  const dummyTodos = ["todo1", "todo2"];
  const [todos, setTodos] = useState(dummyTodos);
  const handlerChange = (value) => {
    setTodos([...todos, value]);
  };

  const deleteBtn = (id) => {
    const restItems = todos.filter((iteam, index) => index !== id);
    setTodos(restItems);
  };

  return (
    <div>
      <SearchBox handlerChange={handlerChange} />
      <Todo todos={todos} deleteBtn={deleteBtn} />
    </div>
  );
};

export default Home;
