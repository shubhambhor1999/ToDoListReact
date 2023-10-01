import React, { useState } from "react";

function App() {
  const [list, UpdateList] = useState("");
  const [newList, updateNewList] = useState([]);
  const HandleList = (event) => {
    const newValue = event.target.value;
    UpdateList(newValue);
  };
  const NewList1 = () => {
    updateNewList((preValue) => {
      return [...preValue, list];
    });
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={HandleList} type="text" />
        <button onClick={NewList1}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
