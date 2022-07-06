import React from "react";
import { Route } from "react-router-dom";
import MIUHeader from "./MIUHeader";

function LayoutRoute(props) {
  return (
    <React.Fragment>
      <MIUHeader />
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    </React.Fragment>
  );
}
export default LayoutRoute;
