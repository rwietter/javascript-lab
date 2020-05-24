import React from "react";
import { Switch, Route } from "react-router-dom";
import Page404 from "../pages/404/Page404";
import routes from "routes";

function Routes() {
  return (
    <Switch>
      {routes.map((item, key) => (
        <Route
          key={key}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      ))}
      <Route path="*" component={() => <Page404 />} />
    </Switch>
  );
}

export default Routes;
