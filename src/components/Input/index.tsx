import { Eye, EyeClosed } from 'phosphor-react';
import * as S from './styles';
import { InputProps } from './interfaces';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, type = 'text', label, ...rest }: InputProps,
  ref,
) => {
  const [customType, setCustomType] = useState(type);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <S.Container>
      <p>{label}</p>
      <S.ContainerInput isFocused={isFocused} isError={!!error}>
        <input
          ref={ref}
          type={customType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />
        {type === 'password' && (
          <S.ButtonPassword
            type="button"
            onClick={() =>
              setCustomType((prev) =>
                prev === 'password' ? 'text' : 'password',
              )
            }
          >
            {customType !== 'password' ? (
              <EyeClosed size={21} />
            ) : (
              <Eye size={21} />
            )}
          </S.ButtonPassword>
        )}
      </S.ContainerInput>
      <S.Error>{error || ''}</S.Error>
    </S.Container>
  );
};

export const Input = forwardRef(InputBase);
