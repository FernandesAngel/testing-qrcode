import * as S from './styles';
import PurpleLogo from '@/assets/purple-logo.png';
import { PublicFormTitle } from '@/components/PublicFormTitle';
import { Button } from '@/components/Button';
import { CustomLink } from '@/components/CustomLink';
import { Input } from '@/components/Input';
import { useNavigate } from 'react-router-dom';

export function ForgotPasswordEmail() {
  const navigate = useNavigate();
  function handleGoToNextpage() {
    navigate('/validar-codigo');
  }
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={PurpleLogo} alt="" />
      </S.LogoContainer>

      <S.Content>
        <PublicFormTitle title="Esqueci minha senha" />
        <S.Description>
          Para redefinir sua senha, informe o email cadastrado na sua conta, e
          vamos enviar e-mail com as instruções.
        </S.Description>
        <S.FormContent>
          <Input label="E-mail" placeholder="E-mail" error="" />
          <S.BottomContent>
            <Button
              type="button"
              mode="primary"
              title="Continuar"
              onClick={() => handleGoToNextpage()}
            />
            <CustomLink
              to="/cadastro-empresa"
              mode="link"
              label="Voltar"
              type="normal"
            />
          </S.BottomContent>
        </S.FormContent>
      </S.Content>
    </S.Container>
  );
}
