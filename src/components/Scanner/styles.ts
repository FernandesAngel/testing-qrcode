import styled from 'styled-components';

export const Container = styled.div``;
export const ScannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 60px 0;
  align-items: center;
  .qr {
    width: 265px;
    height: 265px;
    background-color: black;
    border: 5px solid ${(props) => props.theme.colors.purple950};
    border-radius: 5px;
  }
`;
export const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
`;
