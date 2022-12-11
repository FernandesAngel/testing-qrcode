import { HTMLProps } from 'react';

export interface SelectProps extends HTMLProps<HTMLSelectElement> {
  label: string;

  error: string;
  loading?: boolean;
  optionData?: string[];
}
