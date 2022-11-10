export interface CreateCompanyProps {
  segmentId: string;
  sectorId: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  terms: boolean;
}
export interface CompanyHookData {
  loading: boolean;
  createCompany: (company: CreateCompanyProps) => Promise<boolean>;
}
