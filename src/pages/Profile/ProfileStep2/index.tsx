import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { BaseProfile } from '../BaseProfile';
import * as S from './styles';

export function ProfileStep2() {
  return (
    <BaseProfile>
      <S.Container>
        <Input
          label="CEP"
          error=""
          placeholder="Digite seu cep"
          maxLength={9}
        />

        <Select label="Estado" loading={false} error="" />

        <Select error="" label="Cidade" loading={false} />

        <Input label="Rua" placeholder="Digite o rua" error="" />

        <Input label="Número" placeholder="Digite o número da rua" error="" />

        <Input label="Bairro" placeholder="Digite o bairro" error="" />

        <Button type="submit" mode="primary" title="Salvar" />
      </S.Container>
    </BaseProfile>
  );
}
