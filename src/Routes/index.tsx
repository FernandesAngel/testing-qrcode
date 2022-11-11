import { SignIn } from '@/pages/SignIn';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Collaborators } from '@/pages/Collaborators';
import { Home } from '@/pages/Home';

import { SignUp } from '@/pages/SignUp';
import { PrivateRoutes } from './PrivateRoutes';
import { useAuth } from '@/contexts/auth';
import { PublicRoutes } from './PublicRoutes';

export function AppRoutes() {
  const { data } = useAuth();
  const { token } = data;

  console.log('token', data);

  return (
    <Routes>
      {/* <Route path="/" element={<SignIn />} />
      <Route path="/cadastro-empresa" element={<SignUp />} /> */}

      <Route
        path="/"
        element={
          <PublicRoutes isLogged={token !== '' && token !== undefined} />
        }
      >
        <Route index element={<SignIn />} />
        <Route path="/cad" element={<SignUp />} />
      </Route>

      <Route
        path="dashboard"
        element={
          <PrivateRoutes isLogged={token !== '' && token !== undefined} />
        }
      >
        <Route index element={<Home />} />
        <Route path="colaboradores" element={<Collaborators />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
