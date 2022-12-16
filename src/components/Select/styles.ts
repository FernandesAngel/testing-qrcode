import styled from 'styled-components';
import CaretDown from '@/assets/caret-down.svg';

interface ContainerProps {
  loading: boolean;
}
export const Container = styled.div<ContainerProps>`
  margin-bottom: 4px;
  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    margin-bottom: 0.3125rem;
    color: ${(props) => props.theme.colors.grey900};
    display: flex;
    align-items: center;
    svg {
      margin-left: 7px;
    }
  }
`;

interface ContainerInputProps {
  isError: boolean;
}
export const ContainerSelect = styled.div<ContainerInputProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${(props) =>
    props.isError ? props.theme.colors.red900 : props.theme.colors.grey500};

  select {
    border: 0;
    width: 100%;
    border-radius: 8px;
    height: 3.125rem;
    padding: 0 1.25rem;
    font-size: 1rem;
    background: url(${CaretDown}) no-repeat right;
    background-size: 1.5rem;
    -webkit-appearance: none;
    background-position-x: 96%;
    color: ${(props) => props.theme.colors.grey900};

    border-color: ${(props) => props.theme.colors.grey500};

    outline: none;

    :focus {
      box-shadow: 0 0 0 1.5px ${(props) => props.theme.colors.purple900};
    }

    :-webkit-autofill {
      background-color: ${(props) => props.theme.colors.white100};
      -webkit-text-fill-color: ${(props) => props.theme.colors.grey900};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;

export const Error = styled.span`
  color: ${(props) => props.theme.colors.red900};
  font-size: 12px;
  display: block;
  min-height: 1.5rem;
  line-height: 1.5rem;
`;
