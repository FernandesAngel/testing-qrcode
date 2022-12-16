import { HTMLProps } from 'react';

export interface SearchProps extends HTMLProps<HTMLInputElement> {
  getSearch: (search: string) => void;

  timeDebounce?: number;
}
