import { Tag, User } from 'phosphor-react';
import { MenuItem } from '../MenuItem';
import * as S from './styles';

export function Menu() {
  return (
    <S.Container>
      <MenuItem to="/dashboard/promocoes" label="Promoções">
        <Tag size={22} />
      </MenuItem>
      <MenuItem to="/dashboard/entregar-premio" label="Entregar Prêmio">
        <Tag size={22} />
      </MenuItem>
      <MenuItem to="/dashboard/perfil" label="Perfil">
        <User size={22} />
      </MenuItem>

      <p>botão sair</p>
    </S.Container>
  );
}
