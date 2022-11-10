export type RolesTypes = "COMPANY" | "ADMIN" | "CLIENT";

export interface RoleProps {
  id: string;
  value: string;
  label: string;
  type: RolesTypes;
}
export interface AddressProps {
  id: string;
  cep: string;
  street: string;
  streetNumber: string;
  district: string;
  city: string;
  state: string;
}
export interface CompanyProps {
  id: string;
  name: string;
  description: string;
  cnpj: string;
  logoUrl: string;
  phoneNumber: string;
  site: string;
  latitude: string | number;
  longitude: string | number;
  complete: boolean;
  blocked: boolean;
  blockingReason: string | null;
  validAccessDate: string | Date;
  createdAt: string | Date;
  updatedAt: string | Date;
  segmentId: string;
  sectorId: string;
  addressId: string;
}
export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatarUrl: string;
  terms: boolean;
  roles: RoleProps[];
  address: AddressProps;
  createdAt: string;
  updatedAt: string;
  addressId: string;
  company: CompanyProps;
  companyId: string;
}
export interface AuthState {
  user: UserProps;
  token: string;
  refreshToken: string;
}

export interface CredentialProps {
  email: string;
  password: string;
}
export interface CodeVerificationProps {
  email: string;
  code: number;
}
export interface CreatePasswordProps extends CodeVerificationProps {
  password: string;
}

export interface ChangePasswordLoggedProps {
  oldPassword: string;
  password: string;
}
export interface AuthContextData {
  data: AuthState;
  loading: boolean;
  signIn: (credentials: CredentialProps) => Promise<void>;
  signOut: () => void;
  codeVerification: (
    verificationData: CodeVerificationProps
  ) => Promise<boolean>;

  createPasswordProps: (
    createPasswordData: CreatePasswordProps
  ) => Promise<void>;

  forgotPassword: (email: string) => Promise<boolean>;
  changePasswordLogged: (
    changePasswordData: ChangePasswordLoggedProps
  ) => Promise<void>;

  settingData: (dataUser: AuthState) => void;
}
