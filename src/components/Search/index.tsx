import { SearchProps } from './interfaces';
import useDebounce from '@/utils/debounce';
import * as S from './styles';
import { useCallback, useState } from 'react';
import { MagnifyingGlass } from 'phosphor-react';

export function Search({
  getSearch,
  timeDebounce = 600,
  ...rest
}: SearchProps) {
  const [displaySearch, setDisplaySearch] = useState('');
  const debounceChange = useDebounce(getSearch, timeDebounce);
  const handleSearch = useCallback(
    (value: string) => {
      setDisplaySearch(value);
      debounceChange(value);
    },
    [debounceChange],
  );
  return (
    <S.Container>
      <S.ContainerInput>
        <input
          value={displaySearch}
          onChange={(text) => handleSearch(text.target.value)}
          {...rest}
        />
        <div>
          <MagnifyingGlass size={20} />
        </div>
      </S.ContainerInput>
    </S.Container>
  );
}
