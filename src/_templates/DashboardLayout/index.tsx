import { Header } from '@/components/Header';
import { Menu } from '@/components/Menu';
import * as S from './styles';

import { DashboardLayoutProps } from './interfaces';

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <S.Container>
      <S.Left>
        <Menu />
      </S.Left>
      <S.Right>
        <Header />
        <S.Content>{children}</S.Content>
      </S.Right>
    </S.Container>
  );
}
