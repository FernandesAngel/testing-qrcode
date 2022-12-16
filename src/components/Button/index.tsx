import { ButtonLinkProps } from './interfaces';
import { CircleNotch } from 'phosphor-react';
import * as S from './styles';

export function Button({
  title,
  mode = 'primary',
  showIcon = false,
  disabled = false,
  loading = false,
  small = false,
  ...rest
}: ButtonLinkProps) {
  return (
    <S.Button
      className="btn-ripple"
      isSmall={small}
      mode={mode}
      disabled={disabled}
      {...rest}
    >
      <span />
      {loading ? (
        <CircleNotch className="spinner" size={20} />
      ) : (
        <small>{title}</small>
      )}
      <span />
    </S.Button>
  );
}
