import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin: 15px 0 10px;
  height: 80px;
`;
export const StepContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100px;
  border: 0;
  background: transparent;
`;

interface StepProps {
  active: boolean;
}
export const Step = styled.div<StepProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? props.theme.colors.purple950 : 'transparent'};
  border: 1px solid ${(props) => props.theme.colors.purple950};
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.8125rem;
  color: ${(props) =>
    props.active ? props.theme.colors.white100 : props.theme.colors.grey500};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StepLabel = styled.p`
  font-weight: 500;
  font-size: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  margin-top: 5px;
`;
export const Divider = styled.div`
  width: 30%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.purple300};
  margin: 20px 1.5rem;
`;
