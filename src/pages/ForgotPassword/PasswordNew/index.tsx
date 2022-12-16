import * as S from './styles';
import PurpleLogo from '@/assets/purple-logo.png';
import { PublicFormTitle } from '@/components/PublicFormTitle';
import { Button } from '@/components/Button';
import { CustomLink } from '@/components/CustomLink';
import { Input } from '@/components/Input';

export function ForgotPasswordNew() {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={PurpleLogo} alt="" />
      </S.LogoContainer>

      <S.Content>
        <PublicFormTitle title="Reformular senha" />
        <S.FormContent>
          <Input type="password" label="Senha" placeholder="Senha" error="" />
          <Input
            type="password"
            label="Confirmar senha"
            placeholder="Confirmar senha"
            error=""
          />
          <S.BottomContent>
            <Button type="button" mode="primary" title="Confirmar Código" />
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
