import * as S from './styles';
import WhiteLogo from '@/assets/white-logo.png';
import { List, X } from 'phosphor-react';
import { Menu } from '../Menu';
import { useState } from 'react';

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <S.Container>
      <S.Menu onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? (
          <List size={24} color="#fff" />
        ) : (
          <X size={24} color="#fff" />
        )}

        <S.MenuContainer isOpen={openMenu}>
          <Menu />
        </S.MenuContainer>

        {/* <Menu /> */}
      </S.Menu>
      <S.Logo>
        <img src={WhiteLogo} alt="" />
      </S.Logo>
    </S.Container>
  );
}
