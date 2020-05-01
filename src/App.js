import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodosList from "./components/todos-list.component";
import EditToDo from "./components/edit-todo.component";
import CreateToDo from "./components/create-todo.component";
import logo from "../public/logo.png";

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            MERN-Stack Todos App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/create" className="nav-link">
                  Creat Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" exact component={EditToDo} />
      <Route path="/create" exact component={CreateToDo} />
    </Router>
  );
}
