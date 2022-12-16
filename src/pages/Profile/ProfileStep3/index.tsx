import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { BaseProfile } from '../BaseProfile';
import * as S from './styles';

export function ProfileStep3() {
  return (
    <BaseProfile>
      <S.Container>
        <Input
          label="Senha Atual"
          type="password"
          error=""
          placeholder="Digite sua senha atual"
        />
        <Input
          label="Nova Senha"
          type="password"
          error=""
          placeholder="Digite sua nova senha"
        />
        <Input
          label="Confirmar senha"
          type="password"
          error=""
          placeholder="Repita a nova senha"
        />

        <Button type="submit" mode="primary" title="Salvar" />
      </S.Container>
    </BaseProfile>
  );
}
