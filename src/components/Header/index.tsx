import * as S from './styles';
import WhiteLogo from '@/assets/white-logo.png';
import { List } from 'phosphor-react';

export function Header() {
  return (
    <S.Container>
      <S.Menu>
        <List size={24} color="#fff" />
      </S.Menu>
      <S.Logo>
        <img src={WhiteLogo} alt="" />
      </S.Logo>
    </S.Container>
  );
}
