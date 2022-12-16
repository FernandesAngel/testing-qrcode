import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 80px;
`;
export const Content = styled.div``;
export const NewAccountContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    margin-right: 6px;
  }
  @media (max-width: 360px) {
    p {
      font-size: 0.8rem;
    }
    a {
      font-size: 0.8rem;
    }
  }
`;
export const FormContent = styled.form`
  width: 100%;
  margin-top: 1.5625rem;
  height: 70vh;
  position: relative;
`;
export const BottomContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;
