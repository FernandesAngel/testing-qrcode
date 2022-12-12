import { SignIn } from '@/pages/SignIn';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Home';

import { PrivateRoutes } from './PrivateRoutes';
// import { useAuth } from '@/contexts/auth';
import { PublicRoutes } from './PublicRoutes';
import { ForgotPasswordCode } from '@/pages/ForgotPassword/PasswordCode';
import { ForgotPasswordNew } from '@/pages/ForgotPassword/PasswordNew';
import { ForgotPasswordEmail } from '@/pages/ForgotPassword/PasswordEmail';
import { ProfileStep1 } from '@/pages/Profile/ProfileStep1';
import { ProfileStep2 } from '@/pages/Profile/ProfileStep2';
import { ProfileStep3 } from '@/pages/Profile/ProfileStep3';
import { Sales } from '@/pages/Sales';

export function AppRoutes() {
  // const { data } = useAuth();
  // const { token } = data;

  return (
    <Routes>
      {/* <Route path="/" element={<SignIn />} />
      <Route path="/cadastro-empresa" element={<SignUp />} /> */}

      <Route path="/" element={<PublicRoutes isLogged={true} />}>
        <Route index element={<SignIn />} />
        <Route path="/validar-codigo" element={<ForgotPasswordCode />} />
        <Route path="/criar-senha" element={<ForgotPasswordNew />} />
        <Route path="/recuperar-senha" element={<ForgotPasswordEmail />} />
        {/* <Route path="/cadastro-empresa" element={<SignUp />} /> */}
      </Route>

      <Route path="dashboard" element={<PrivateRoutes isLogged={true} />}>
        <Route index element={<Home />} />
        <Route path="promocoes" element={<Sales />} />
        <Route path="perfil" element={<ProfileStep1 />} />
        <Route path="perfil/endereco" element={<ProfileStep2 />} />
        <Route path="perfil/trocar-senha" element={<ProfileStep3 />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
