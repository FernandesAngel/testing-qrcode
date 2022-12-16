import styled from 'styled-components';

export const Container = styled.nav`
  width: 80%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;

  a {
    width: 100%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.white100};
    font-size: 1rem;
    padding: 18px;
    border-radius: 6px;
    margin: 0.5rem 0;
  }
`;
