import { BrowserRouter as Router, Switch } from "react-router-dom";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <Router>
      <Switch>
        <main className="flex flex-col items-center justify-center h-screen">
          <MainRouter />
        </main>
      </Switch>
    </Router>
  );
};

export default App;
