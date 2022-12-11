import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.purple950};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  height: 55px;
  margin-bottom: 20px;
`;

export const Menu = styled.button`
  border: 0;
  background: transparent;
`;
export const Logo = styled.div`
  width: 115px;
  img {
    width: 100%;
  }
`;
