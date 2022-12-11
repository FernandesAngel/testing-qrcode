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
  height: 60vh;
  position: relative;

  .vi__wrapper {
    width: 100%;
  }

  .container {
    width: 100%;
    height: 62px;
  }
  .character {
    width: 80px;
    height: 62px;
    margin: 0 0.4375rem;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.grey650};
  }
  .character--inactive {
    background: ${(props) => props.theme.colors.white200};
  }
  .character--selected {
    border-color: ${(props) => props.theme.colors.purple900};
  }
`;

export const BottomContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 80px;
`;
