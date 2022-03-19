import React from "react";

const SingleTodo = ({ myObj }) => {
  const { todo, index, deleteBtn } = myObj;
  return (
    <div className="d-flex justify-content-around align-items-center border mb-2 py-2">
      <li>{todo}</li>
      <button className="btn btn-danger " onClick={() => deleteBtn(index)}>
        Delete
      </button>
    </div>
  );
};

export default SingleTodo;
