import { NavLink } from 'react-router-dom';
import * as S from './styles';

export function Menu() {
  return (
    <S.Container>
      <NavLink to="/dashboard">
        <S.Txt>Home</S.Txt>
      </NavLink>
      <NavLink to="/dashboard/colaboradores">
        <S.Txt>Colaboradores</S.Txt>
      </NavLink>
    </S.Container>
  );
}
