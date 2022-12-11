import { LinkProps } from 'react-router-dom';

export interface CustomLinkProps extends LinkProps {
  label: string;

  type?: 'small' | 'normal';

  mode?: 'link' | 'button';

  colorText?: 'purple' | 'red';
  onAction?: () => void;
}
