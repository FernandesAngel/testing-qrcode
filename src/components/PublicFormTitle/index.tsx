import { PublicFormTitleProps } from './interfaces';
import * as S from './styles';

export function PublicFormTitle({ title }: PublicFormTitleProps) {
  return (
    <S.Container>
      <S.Text>{title}</S.Text>
      <S.PurpleText>Fidelion</S.PurpleText>
    </S.Container>
  );
}
