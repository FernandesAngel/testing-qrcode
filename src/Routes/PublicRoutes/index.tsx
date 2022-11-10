import { Navigate, Outlet } from "react-router-dom";

import { PrivateRoutesProps } from "./interfaces";

export const PublicRoutes = ({
  isLogged,
  redirectPath = "/dashboard",
}: PrivateRoutesProps) => {
  if (isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
