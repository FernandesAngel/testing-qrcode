export interface StepsProps {
  id: string;
  label: string;
  to: string;
  disabled: boolean;
}

export interface StepsTabProps {
  steps: StepsProps[];
  currentPath: string;
}
