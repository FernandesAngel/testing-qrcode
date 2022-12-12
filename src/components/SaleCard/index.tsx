import { Article, CalendarBlank, Clock, CrownSimple } from 'phosphor-react';
import { memo } from 'react';

import { SaleCardProps } from './interfaces';

import * as S from './styles';

const SaleCardBase = ({ data }: SaleCardProps) => {
  return (
    <>
      <S.Container>
        <S.Title>{data.title}</S.Title>
        <S.BannerContainer>
          <img src="/banner.png" alt="" />
        </S.BannerContainer>

        <S.ContentContainer>
          <S.Description>
            <CrownSimple size={16} />
            <p>
              {' '}
              <b>Prêmio: </b>
              {data.prize}
            </p>
          </S.Description>
          <S.divider />
          <S.Description>
            <Clock size={13} />
            <p>
              <b>Limite diário: </b>
              {data.dailyLimit}
            </p>
          </S.Description>
          <S.divider />
          <S.Description>
            <Article size={13} />
            <p>
              <b>Quantidade de prêmios: </b>
              {data.quantity}
            </p>
          </S.Description>
        </S.ContentContainer>
        <S.DatesContainer>
          <S.Item>
            <CalendarBlank size={11} />
            Inicial:
            <p>{data.initialDate}</p>
          </S.Item>
          <S.Item>
            <CalendarBlank size={11} />
            Final:
            <p>{data.finalDate}</p>
          </S.Item>
        </S.DatesContainer>
      </S.Container>
    </>
  );
};

const SaleCard = memo(SaleCardBase);
export { SaleCard };
