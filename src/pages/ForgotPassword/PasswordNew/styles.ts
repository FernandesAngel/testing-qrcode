import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const FormContent = styled.form`
  width: 100%;
  margin-top: 1.5625rem;
  height: 65vh;
  position: relative;
`;

export const BottomContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 80px;
`;
