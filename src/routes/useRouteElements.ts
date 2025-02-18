import { useRoutes } from "react-router-dom";
// import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";

export const useRouteElements = () => {
  const routeElements = useRoutes([
    ...publicRoutes,
    // , ...protectedRoutes
  ]);

  return routeElements;
  return true;
};
