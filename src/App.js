import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import routes from "./routes";
import PageSpinner from "./pages/utility/PageSpinner";
import E404 from "./pages/error/E404";


function App() {

  const publicRoutes = routes.map(r => <Route key={r.path} exact path={r.path} component={React.lazy(() => import(`./pages/${r.file}`))} /> );

  return (
    <React.Suspense fallback={<PageSpinner />} >
      <Router>
        <Switch>
          {
            publicRoutes
          }
          <Route component={E404} status={404}/>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
