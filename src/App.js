import React from "react";
import "./styles/main.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "../src/components/homepage/Home";
import About from "../src/components/about/About";
import Project from "../src/components/project/Project";
import Holy from "../src/components/project/holy-spirit/holySpirit";
import AboutHoly from "../src/components/project/holy-spirit/About";
import Directories from "../src/components/project/holy-spirit/Directory";
import Public from "../src/components/project/holy-spirit/publicService";
import Samples from "./components/sample/sampleProject";
import FunctionalTodo from "./components/samples/FunctionalTodo";
import Editlist from "./components/samples/todolist/EditList";
import ViewList from "./components/samples/todolist/ViewList";
import Blogs from "./components/samples/BlogsSpot";

function App() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/projects" component={Project} />
      <Route path="/barangay" component={Holy} />
      <Route path="/about-holyspirit" component={AboutHoly} />
      <Route path="/directory" component={Directories} />
      <Route path="/public" component={Public} />
      <Route path="/project-samples" exact component={Samples} />
      <Route path="/project-samples/todo-list" component={FunctionalTodo} />
      <Route path="/project-samples/blogs" component={Blogs} />
      <Route path="/edit-post/:id" component={Editlist} />
      <Route path="/view-post/:id" component={ViewList} />
      <Route path="/" exact component={Homepage} />
    </Switch>
  );
}

export default App;
