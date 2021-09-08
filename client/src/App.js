import React from "react";
import "./App.css";
import Posts from "./screens/Posts/Posts";
import CreatePost from "./screens/CreatePost/CreatePost";
import EditPost from "./screens/EditPost/EditPost";
import PostDetail from "./screens/PostDetail/PostDetail";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/create-post" component={CreatePost} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/posts/:id" component={PostDetail} />
      </Switch>
    </div>
  );
};

export default App;
