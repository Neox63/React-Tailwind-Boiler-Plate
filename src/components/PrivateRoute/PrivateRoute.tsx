import { Redirect, Route, RouteProps } from "react-router-dom";
import { useUser } from "../../providers/user";

function PrivateRoute({ children, ...rest }: { children: React.ReactNode } & RouteProps) {
  const { isLogged } = useUser();

  return (
    <Route
      {...rest}
      render={() => (isLogged ? children : <Redirect to={"/login"} />)}
    />
  );
}

export default PrivateRoute;