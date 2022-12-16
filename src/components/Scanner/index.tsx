import * as S from './styles';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Scanner() {
  const [data, setData] = useState('No result');
  const [type, setType] = useState<'user' | 'environment'>('user');
  const navigate = useNavigate();
  function handleGoToSubscribers() {
    navigate('/dashboard/entregar-premio/resumo');
  }

  return (
    <S.Container>
      <S.ScannerContainer>
        <QrReader
          key={type}
          constraints={{ facingMode: type }}
          scanDelay={300}
          onResult={(result: any, error) => {
            if (result !== undefined) {
              setData(result?.text || 'nada');
            }

            if (error) {
              console.log('caiu no erro', error);
            }
          }}
          className="qr"
        />
        <p>{data}</p>
        <button
          type="button"
          onClick={() =>
            setType((prev) => (prev === 'user' ? 'environment' : 'user'))
          }
        >
          {type === 'user' ? 'Câmera front' : 'Câmera back'}
        </button>
      </S.ScannerContainer>
      <button type="button" onClick={() => handleGoToSubscribers()}>
        continuar
      </button>
      <S.Description>
        Coloque o código qr dentro do quadro para digitalizar. Evite agitar para
        obter resultados mais rapidamente.
      </S.Description>
    </S.Container>
  );
}
