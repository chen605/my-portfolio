import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
