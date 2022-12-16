import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  width: 100%;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.h2`
  color: ${(props) => props.theme.colors.grey900};
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.8125rem;
`;
export const Description = styled.h2`
  color: ${(props) => props.theme.colors.grey900};
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5rem;
`;
export const ButtonContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
