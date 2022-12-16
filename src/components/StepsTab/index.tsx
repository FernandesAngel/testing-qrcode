// import { useAuth } from '@/contexts/auth';

import { useToast } from '@/contexts/toast';
import { useNavigate } from 'react-router-dom';
import { StepsProps, StepsTabProps } from './interfaces';
import * as S from './styles';

export function StepsTab({ currentPath, steps }: StepsTabProps) {
  const navigate = useNavigate();
  const { addToast } = useToast();

  function handleNavigation(stepsProp: StepsProps): void {
    if (stepsProp.disabled) {
      return addToast({
        message:
          'Para acessar este step primeiramente preencha o step anterior.',
        type: 'alert',
      });
    }
    navigate(stepsProp.to);
  }
  return (
    <S.Container>
      <S.StepContainer onClick={() => handleNavigation(steps[0])}>
        <S.Step active={steps[0].to === currentPath}>{steps[0].id}</S.Step>
        <S.StepLabel>{steps[0].label}</S.StepLabel>
      </S.StepContainer>

      <S.Divider />
      <S.StepContainer onClick={() => handleNavigation(steps[1])}>
        <S.Step active={steps[1].to === currentPath}>{steps[1].id}</S.Step>
        <S.StepLabel>{steps[1].label}</S.StepLabel>
      </S.StepContainer>

      <S.Divider />
      <S.StepContainer onClick={() => handleNavigation(steps[2])}>
        <S.Step active={steps[2].to === currentPath}>{steps[2].id}</S.Step>
        <S.StepLabel>{steps[2].label}</S.StepLabel>
      </S.StepContainer>
    </S.Container>
  );
}
