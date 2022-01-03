import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import * as ROUTES from "./constants/routes";

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<p>Loading... </p>}>
          <Switch>
            <Route path={ROUTES.LOGIN} element={<Login />} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
