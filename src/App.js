import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<p>Loading... </p>}>
          <Switch>
            <Route path="/login" element={<Login />} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
