import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchBox = ({ handlerChange }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !todo ? alert("please a new todo") : handlerChange(todo);
    setTodo((e.target.value = ""));
  };

  return (
    <div className="mt-5">
      <h2 className="mb-3">My Todo Apps</h2>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl
            placeholder="Enter a New Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add ToDo
          </button>
        </InputGroup>
      </form>
    </div>
  );
};

export default SearchBox;
