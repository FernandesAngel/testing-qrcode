import { ReactElement } from 'react';

export interface ContentHeaderProps {
  title: string;
  description: string;
  backButton?: ReactElement;
  mainButton?: ReactElement;
}
