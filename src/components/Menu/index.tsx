import { NavLink } from 'react-router-dom';
import * as S from './styles';

export function Menu() {
  return (
    <S.Container>
      <NavLink to="/dashboard/promocoes">
        <S.Txt>Promoções</S.Txt>
      </NavLink>
      <NavLink to="/dashboard/perfil">
        <S.Txt>Perfil</S.Txt>
      </NavLink>
      <p>botão sair</p>
    </S.Container>
  );
}
