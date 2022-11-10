import { Navigate, Outlet } from 'react-router-dom';
import { DashboardLayout } from '../../_templates/DashboardLayout';

import { PrivateRoutesProps } from './interfaces';

export const PrivateRoutes = ({
  isLogged,
  redirectPath = '/',
}: PrivateRoutesProps) => {
  if (!isLogged) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
