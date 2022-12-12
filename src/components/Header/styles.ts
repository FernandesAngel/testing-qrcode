import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.purple950};
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  height: 55px;
  margin-bottom: 20px;
  position: relative;
`;

export const Menu = styled.button`
  border: 0;
  background: transparent;
`;

interface MenuContainerProps {
  isOpen: boolean;
}
export const MenuContainer = styled.div<MenuContainerProps>`
  position: absolute;
  top: 55px;
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.5s ease-in-out;

  left: 0;
  background-color: ${(props) => props.theme.colors.purple950};
  width: 100%;
  height: 100vh;
`;
export const Logo = styled.div`
  width: 115px;
  img {
    width: 100%;
  }
`;
