import { ContentHeader } from '@/components/ContentHeader';
import { StepsTab } from '@/components/StepsTab';
import { useMemo } from 'react';
import { BaseProfileProps } from './interfaces';
import * as S from './styles';

const steps = [
  {
    id: '1',
    label: 'Dados',
    to: '/dashboard/perfil',
    disabled: false,
  },
  {
    id: '2',
    label: 'Endereço',
    to: '/dashboard/perfil/endereco',
    disabled: false,
  },
  {
    id: '3',
    label: 'Trocar senha',
    to: '/dashboard/perfil/trocar-senha',
    disabled: false,
  },
];

export function BaseProfile({ children }: BaseProfileProps) {
  const path = location.pathname;
  const headerDescription = useMemo(() => {
    if (path === '/dashboard/perfil/endereco') {
      return 'Seu endereço';
    }
    if (path === '/dashboard/perfil/trocar-senha') {
      return 'Formulário de troca de senha';
    }
    return 'Seus dados de usuário';
  }, [path]);

  return (
    <S.Container>
      <ContentHeader title="Perfil" description={headerDescription} />
      <StepsTab currentPath={path} steps={steps} />
      {children}
    </S.Container>
  );
}
