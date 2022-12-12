import { ContentHeader } from '@/components/ContentHeader';
import { SaleCard } from '@/components/SaleCard';
import { Search } from '@/components/Search';
import { useCallback, useState } from 'react';
import * as S from './styles';
const data = [
  {
    id: '1',
    title: 'Promoção 2 pokes Ceviche Mix',
    prize:
      'Tortor senectus eget sit facilisis tellus aliquam posuere. Ornare vitae ultricies enim porttitor nunc eu. Amet pellentesque tortor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor senectus eget sit facilisis tellus aliquam posuere. Ornare vitae ultricies enim porttitor nunc eu. Amet pellentesque tortor.',
    flag: 'ativo',
    quantity: '1000',
    dailyLimit: '3',
    initialDate: '10/10/2022',
    finalDate: '20/11/2022',
    createdAt: '10/10/2022',
    updatedAt: '20/11/2022',
  },
  {
    id: '2',
    title: 'Promoção 2 pokes Ceviche Mix',
    prize:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor senectus eget sit facilisis tellus aliquam posuere. Ornare vitae ultricies enim porttitor nunc eu. Amet pellentesque tortor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor senectus eget sit facilisis tellus aliquam posuere. Ornare vitae ultricies enim porttitor nunc eu. Amet pellentesque tortor.',
    flag: 'ativo',
    quantity: '1000',
    dailyLimit: '3',
    initialDate: '10/10/2022',
    finalDate: '20/11/2022',
    createdAt: '10/10/2022',
    updatedAt: '20/11/2022',
  },
];
export function Sales() {
  const loading = false;
  const [search, settingSearch] = useState('');

  const handleGetSearch = useCallback(
    (value: string) => {
      settingSearch(value);
      console.log(search);
    },
    [settingSearch, search],
  );
  return (
    <S.Container>
      <ContentHeader title="Lista de Promoções" description="" />
      <S.SearchContainer>
        <Search
          placeholder="Pesquise uma promoção"
          getSearch={handleGetSearch}
        />
      </S.SearchContainer>
      {loading ? (
        <p>carrgando</p>
      ) : data ? (
        <S.CardsContainer>
          {data.map((data) => (
            <SaleCard key={data.id} data={data} />
          ))}
        </S.CardsContainer>
      ) : (
        <p>sem conteúdo</p>
      )}
    </S.Container>
  );
}
