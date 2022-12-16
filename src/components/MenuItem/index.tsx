import { MenuItemProps } from './interfaces';
import { NavLink } from 'react-router-dom';

import * as S from './styles';

export function MenuItem({ to, label, children }: MenuItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? 'menu-active' : undefined)}
    >
      <S.IconContainer>{children}</S.IconContainer>
      <S.Txt>{label}</S.Txt>
    </NavLink>
  );
}
