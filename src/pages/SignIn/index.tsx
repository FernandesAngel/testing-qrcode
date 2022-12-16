import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { PublicFormTitle } from '@/components/PublicFormTitle';
import PurpleLogo from '@/assets/purple-logo.png';

import { Navigate } from 'react-router-dom';

import * as S from './styles';
import { CustomLink } from '@/components/CustomLink';

export function SignIn() {
  // const { addToast } = useToast();
  // const { signIn } = useAuth();
  const isLogged = false;

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }

  // const handleSignIn = () => {
  //   signIn({ email: 'imbitubadigital33@gmail.com', password: '12345678' });
  // };

  return (
    <S.Container>
      <S.LogoContainer>
        <img src={PurpleLogo} alt="" />
      </S.LogoContainer>

      <S.Content>
        <PublicFormTitle title="Fazer login no" />
        <S.FormContent>
          <Input label="E-mail" error="" placeholder="E-mail" />
          <Input label="Senha" error="" placeholder="Senha" type="password" />

          <S.BottomContent>
            <Button type="button" mode="primary" title="Fazer login" />
            <CustomLink
              to="recuperar-senha"
              mode="link"
              label="Esqueceu sua senha?"
              type="small"
            />
            <S.NewAccountContent>
              <p>Ainda não possui uma conta?</p>
              <CustomLink
                to="cadastro-empresa"
                mode="link"
                label="Cadastre-se"
                type="normal"
              />
            </S.NewAccountContent>
          </S.BottomContent>
        </S.FormContent>
      </S.Content>
    </S.Container>
  );
}
