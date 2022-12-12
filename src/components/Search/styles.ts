import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${(props) => props.theme.colors.grey500};
  input {
    border: 0;
    width: 100%;
    border-radius: 8px;
    height: 2.75rem;
    padding: 0 0.9rem;
    font-size: 1rem;
    margin-right: 6px;

    &::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.grey500};
      opacity: 1; /* Firefox */
    }
    outline: none;

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
  div {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    color: ${(props) => props.theme.colors.grey600};
  }
`;
