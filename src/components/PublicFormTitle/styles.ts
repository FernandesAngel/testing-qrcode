import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;
export const Text = styled.p`
  color: ${(props) => props.theme.colors.grey900};
`;
export const PurpleText = styled.p`
  margin-left: 0.4375rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.purple900};
`;
