import { memo } from 'react';

import { SaleCardProps } from './interfaces';

import * as S from './styles';

const UserOverviewCardBase = ({ data }: SaleCardProps) => {
  return (
    <>
      <S.Container></S.Container>
    </>
  );
};

const UserOverview = memo(UserOverviewCardBase);
export { UserOverview };
