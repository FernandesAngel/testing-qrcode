import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { BaseProfile } from '../BaseProfile';
import * as S from './styles';

export function ProfileStep1() {
  return (
    <BaseProfile>
      <S.Container>
        <S.UploadContainer>
          {/* <UploadButton
            circle
            label="Foto de perfil"
            imageUrl={user.avatarUrl || ''}
            onUpload={handleUpload}
            loading={loadingUpload}
            aspectRatios={aspectRatiosProfile}
            id={user.id}
            messageAlert=""
          /> */}
        </S.UploadContainer>

        <Input error="" label="Nome" placeholder="Digite seu nome" />

        <Input error="" label="Sobrenome" placeholder="Digite seu sobrenome" />

        <Input error="" label="CPF" placeholder="Digite seu cpf" />

        <Input
          error=""
          label="Telefone"
          placeholder="Digite o celular do colaborador"
        />

        <Input
          label="Data de nascimento"
          type="date"
          // max={format(new Date(), 'yyyy-MM-dd')}
          placeholder="Digite sua data de nascimento"
          error=""
        />
        <Button type="submit" mode="primary" title="Salvar" />
      </S.Container>
    </BaseProfile>
  );
}
