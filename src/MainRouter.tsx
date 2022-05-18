import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Panel from "./pages/Panel";
import Register from "./pages/Register";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <PrivateRoute exact path="/">
        <Panel />
      </PrivateRoute>

      <PrivateRoute exact path="/panel">
        <Panel />
      </PrivateRoute>

      <Route>
        <span>404</span>
      </Route>
    </Switch>
  );
};

export default MainRouter;
