import React, { useState } from "react";

function CreateToDo(props) {
  const [todos, setToDos] = useState({
    description: "",
    responsible: "",
    priority: "",
    completed: false
  });

  function onChangeInput(e) {
    const { name, value } = e.target;
    setToDos(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function onChooseSubmit(e) {
    e.preventDefault();
    console.log(todos);
    //
    setToDos({
      description: "",
      responsible: "",
     priority: "",
      completed: false
    });
  }
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Creat To Do List</h3>
      <form onSubmit={onChooseSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={onChangeInput}
            value={todos.description}
            placeholder="Enter description"
          />
        </div>
        <div className="form-group">
          <label>Reposible: </label>
          <input
            type="text"
            className="form-control"
            name="responsible"
            onChange={onChangeInput}
            value={todos.responsible}
            placeholder="Enter responsible"
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityLow"
              value= "Low" //{todos.priority ="Low"}
             // checked
              onChange={onChangeInput}
            />
            <label className="form-check-label" for="priorityLow">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
               className="form-check-input"
              type="radio"
              name="priority"
              id="priorityMedium"
              value= "Medium" //{todos.priority = "Medium"}
              //checked={todos.priority === "Medium"}
              onChange={onChangeInput}
            />
            <label className="form-check-label" for="priorityMedium">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priority"
              id="priorityHigh"
              value="High" //{todos.priority = "High"}
              // checked={todos.priority === "High"}
              onChange={onChangeInput}
            />
            <label className="form-check-label" for="priorityHigh">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
export default CreateToDo;
