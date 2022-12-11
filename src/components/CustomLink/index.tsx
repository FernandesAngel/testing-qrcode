import { CustomLinkProps } from './interfaces';
import * as S from './styles';

export function CustomLink({
  label,
  type = 'normal',
  mode = 'link',
  colorText = 'purple',
  onAction,
  ...rest
}: CustomLinkProps) {
  if (mode === 'link') {
    return (
      <S.StyledLink
        colorText={colorText}
        title={`${label}`}
        type={type}
        {...rest}
      >
        {label}
      </S.StyledLink>
    );
  }
  return (
    <S.ButtonLink colorText={colorText} type="button" onClick={onAction}>
      {label}
    </S.ButtonLink>
  );
}
