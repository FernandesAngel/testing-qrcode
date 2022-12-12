import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  box-shadow: 0px 0px 10px rgba(218, 218, 255, 0.5);
  border-radius: 10px;
`;

export const BannerContainer = styled.div`
  width: 100%;
  height: 7.1rem;
  margin: 10px 0 5px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme.colors.grey900};
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.grey900};
  font-size: 0.875rem;
  line-height: 1.0625rem;
  display: flex;
  width: 100%;
  justify-content: flex-start;

  p {
    text-align: justify;
    font-weight: 400;
    margin-left: 3px;
    width: 100%;
  }
`;
export const DatesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0.4rem 0;
`;
export const ContentContainer = styled.div`
  color: ${(props) => props.theme.colors.grey900};
  font-size: 0.875rem;
  line-height: 1.0625rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0.4rem 0;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.purple200};
  border-radius: 4px;
  flex-direction: column;
`;

export const divider = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.purple200};
  margin: 10px 0;
`;
export const DoubleContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 0.9rem;
  justify-content: center;
  svg {
    margin-right: 2px;
  }
  p {
    font-weight: 400;
    margin-left: 3px;
  }
`;
