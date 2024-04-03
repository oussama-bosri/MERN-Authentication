import { Switch, Route } from "react-router-dom";
import Account from "./login/Account";
import FreeComponent from "./login/FreeComponent";
import Production from "./login/Production";
import ProtectedRoutes from "./login/ProtectedRoutes";
import Staging from "./components/Staging";
import Statistics from "./components/Statistics";
import Home from "../src/components/Home";
import Register from "./login/Register";
import './App.css';
function App() {
  return (
    <div>
      {/* create routes here */}
      <Switch>
        <Route exact path="/login" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/stg" component={Staging} />
        <ProtectedRoutes path="/" component={Home} />
        <ProtectedRoutes path="/statistics" component={Statistics} />
        <ProtectedRoutes path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
