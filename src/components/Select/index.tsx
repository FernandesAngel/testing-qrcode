import * as S from './styles';
import { SelectProps } from './interfaces';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { CircleNotch } from 'phosphor-react';
import { useTheme } from 'styled-components';

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { error, label, optionData, loading = false, ...rest }: SelectProps,
  ref,
) => {
  const { colors } = useTheme();
  return (
    <S.Container loading={loading}>
      <p>
        {label}{' '}
        {loading && (
          <CircleNotch className="spinner" color={colors.grey900} size={16} />
        )}
      </p>
      <S.ContainerSelect isError={!!error}>
        <select disabled={loading} ref={ref} {...rest}>
          {/* {optionData.map()} */}
          <option value="Seguimento" defaultChecked>
            Seguimento
          </option>
          <option value="Seguimento">Comida</option>
        </select>
      </S.ContainerSelect>
      <S.Error>{error || ''}</S.Error>
    </S.Container>
  );
};

export const Select = forwardRef(SelectBase);
