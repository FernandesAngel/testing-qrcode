import * as S from './styles';
import PurpleLogo from '@/assets/purple-logo.png';
import { PublicFormTitle } from '@/components/PublicFormTitle';
import { Button } from '@/components/Button';
import { CustomLink } from '@/components/CustomLink';
import VerificationInput from 'react-verification-input';
import { useNavigate } from 'react-router-dom';

export function ForgotPasswordCode() {
  const navigate = useNavigate();
  function handleGoToNextpage() {
    navigate('/criar-senha');
  }
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={PurpleLogo} alt="" />
      </S.LogoContainer>

      <S.Content>
        <PublicFormTitle title="Confirmação de código de acesso" />
        <S.FormContent>
          <VerificationInput
            length={4}
            validChars="0-9"
            autoFocus
            placeholder="0"
            classNames={{
              container: 'container',
              character: 'character',
              characterInactive: 'character--inactive',
              characterSelected: 'character--selected',
            }}
          />
          <S.BottomContent>
            <Button
              type="button"
              mode="primary"
              title="Confirmar Código"
              onClick={() => handleGoToNextpage()}
            />
            <Button
              type="button"
              mode="secondary"
              title="Ainda não recebi meu código de acesso"
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
