import { ContentHeader } from '@/components/ContentHeader';
import { CustomLink } from '@/components/CustomLink';
import { Scanner } from '@/components/Scanner';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function DeliverPrize() {
  const navigate = useNavigate();
  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <S.Container>
      <ContentHeader title="Escanear Qr code" description="" />
      <S.ScannerContainer>
        <Scanner />
      </S.ScannerContainer>
      <S.ButtonContainer>
        <CustomLink
          to="/promocoes"
          label="Voltar"
          mode="button"
          onAction={goBack}
          type="normal"
        />
      </S.ButtonContainer>
    </S.Container>
  );
}
