import React from "react";
import { useRoutes } from "react-router-dom";

const Router = () => {
  const routes = [{ path: "/", element: App }];
  return useRoutes(routes);
};

export default Router;
