import { ContentHeaderProps } from './interfaces';
import * as S from './styles';

export function ContentHeader({
  title,
  mainButton,
  backButton,
  description,
}: ContentHeaderProps) {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Text>{title}</S.Text>
        <S.Description>{description}</S.Description>
      </S.TitleContainer>
      <S.ButtonContainer>
        {mainButton}
        {backButton}
      </S.ButtonContainer>
    </S.Container>
  );
}
