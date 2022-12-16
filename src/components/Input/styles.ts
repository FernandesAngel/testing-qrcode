import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 4px;
  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    margin-bottom: 0.3125rem;
    color: ${(props) => props.theme.colors.grey900};
  }
`;

interface ContainerInputProps {
  isError: boolean;
  isFocused: boolean;
}
export const ContainerInput = styled.div<ContainerInputProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border: 1px;
  border-radius: 6px;
  border-style: solid;
  border-color: ${(props) =>
    props.isError ? props.theme.colors.red900 : props.theme.colors.grey500};
  box-shadow: 0 0 0 1px
    ${(props) => (props.isFocused ? props.theme.colors.purple900 : 'none')};

  input {
    border: 0;
    width: 100%;
    border-radius: 8px;
    height: 3.125rem;
    padding: 0 1.25rem;
    font-size: 1rem;
    /* :focus {

    } */
    &::-webkit-datetime-edit-fields-wrapper {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.grey500};
      font-family: 'Inter', sans-serif;
    }

    border-color: ${(props) => props.theme.colors.grey500};
    &::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.grey500};
      opacity: 1; /* Firefox */
    }
    outline: none;
    :focus {
      box-shadow: 0 0 0 1.5px ${(props) => props.theme.colors.purple900};
    }

    :-ms-input-placeholder {
      color: var(--placeholder);
      color: ${(props) => props.theme.colors.grey500};
    }

    ::-ms-input-placeholder {
      color: var(--placeholder);
      color: ${(props) => props.theme.colors.grey500};
    }

    :-webkit-autofill {
      background-color: ${(props) => props.theme.colors.white100};
      -webkit-text-fill-color: ${(props) => props.theme.colors.white100};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;
export const ButtonPassword = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 40px;
  border: 0;
  background: transparent;
  color: ${(props) => props.theme.colors.grey500};
  outline: none;
  :focus {
    box-shadow: none;
  }
`;
export const Error = styled.span`
  color: ${(props) => props.theme.colors.red900};
  font-size: 12px;
  display: block;
  min-height: 1.5rem;
  line-height: 1.5rem;
`;
