import { ButtonHTMLAttributes } from 'react';

export interface ButtonLinkProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  mode?: 'primary' | 'secondary' | 'tertiary';

  disabled?: boolean;
  small?: boolean;

  loading?: boolean;
  showIcon?: boolean;
}
