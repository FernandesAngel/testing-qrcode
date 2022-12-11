import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';
interface ColorProps {
  colorText?: 'purple' | 'red';
}
interface LinkProps extends ColorProps {
  type: 'small' | 'normal';
}
export const StyledLink = styled(Link)<LinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) =>
    props.colorText === 'purple'
      ? props.theme.colors.purple950
      : props.theme.colors.red900};

  font-size: ${(props) => (props.type === 'small' ? 0.875 : 1)}rem;

  font-weight: 600;
  line-height: 1.0625rem;
  margin: 16px 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) =>
      darken(
        0.2,
        props.colorText === 'purple'
          ? props.theme.colors.purple950
          : props.theme.colors.red900,
      )};
  }
`;

export const ButtonLink = styled.button<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.colorText === 'purple'
      ? props.theme.colors.purple950
      : props.theme.colors.red900};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.0625rem;
  margin: 16px 0;
  margin: 16px 0;
  outline: none;
  border: 0;
  background: transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) =>
      darken(
        0.2,
        props.colorText === 'purple'
          ? props.theme.colors.purple950
          : props.theme.colors.red900,
      )};
  }
`;
