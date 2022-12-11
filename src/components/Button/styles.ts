import styled, { DefaultTheme, css } from 'styled-components';
import { darken } from 'polished';

type TypeProps = 'primary' | 'secondary' | 'tertiary';
interface ButtonProps {
  mode: TypeProps;

  disabled: boolean;
  isSmall: boolean;
}

function backgroundButton(type: TypeProps, theme: DefaultTheme) {
  switch (type) {
    case 'primary':
      return theme.colors.purple900;
    case 'secondary':
      return 'transparent';
    case 'tertiary':
      return 'transparent';
    default:
      return 'transparent';
  }
}

function borderButton(type: TypeProps, theme: DefaultTheme) {
  switch (type) {
    case 'primary':
      return theme.colors.purple900;
    case 'secondary':
      return theme.colors.purple900;
    case 'tertiary':
      return 'transparent';
    default:
      return 'transparent';
  }
}
export const Button = styled.button<ButtonProps>`
  background: ${(props) => backgroundButton(props.mode, props.theme)};
  height: ${(props) => (props.isSmall ? 2 : 3.4)}rem;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => borderButton(props.mode, props.theme)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  font-weight: 500;

  outline: none;
  cursor: pointer;
  color: ${(props) =>
    props.mode === 'primary'
      ? props.theme.colors.white100
      : props.theme.colors.purple900};

  span {
    display: block;
    width: 20px;
  }
  small {
    display: block;
    width: 100%;
    font-size: ${(props) => (props.isSmall ? 0.9 : 1)}rem;
    line-height: 1.1875rem;
  }
  &&:disabled {
    color: ${(props) => props.theme.colors.grey700};
    background-color: ${(props) => props.theme.colors.grey500};
    border-color: ${(props) => props.theme.colors.grey500};
  }

  &:hover {
    background-color: ${(props) =>
      props.mode === 'primary'
        ? darken(0.1, props.theme.colors.purple800)
        : props.theme.colors.purple200};
    border-color: ${(props) => props.theme.colors.purple700};
  }

  position: relative;
  overflow: hidden;
  transition: all ease-in-out 0.5s;

  ${(props) =>
    props.disabled
      ? css`
          &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 25%;
            border-radius: 1px;
            opacity: 0;
            pointer-events: none;
            transition: all ease-in-out 1s;
            transform: scale(5, 5);
          }

          &:active::after {
            padding: 0;
            margin: 0;
            opacity: 0.2;
            transition: 0s;
            transform: scale(0, 0);
          }
        `
      : css`
          &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 25%;
            height: 100%;
            width: 50%;
            background-color: #fff;
            border-radius: 100%;
            opacity: 0;
            pointer-events: none;
            transition: all ease-in-out 1s;
            transform: scale(5, 5);
          }

          &:active::after {
            padding: 0;
            margin: 0;
            opacity: 0.2;
            transition: 0s;
            transform: scale(0, 0);
          }
        `}
`;
