import { Link } from 'react-router-dom';
import * as S from './styles';

export function SignUp() {
  return (
    <S.Container>
      <S.Txt>Cadastro empresa</S.Txt>
      <Link to="/">Home</Link>
    </S.Container>
  );
}
