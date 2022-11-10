import { ChildrenData } from '@/@types/common';
import { useErrorHandling } from '@/hooks/error-handling';
import { api } from '@/services/api';
import { getStorage, removeStorage, settingStorage } from '@/utils/storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useToast } from '../toast';
import {
  AuthContextData,
  AuthState,
  ChangePasswordLoggedProps,
  CodeVerificationProps,
  CreatePasswordProps,
  CredentialProps,
} from './interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: ChildrenData) => {
  const { triggerError } = useErrorHandling();
  const { addToast } = useToast();

  const [data, setData] = useState({} as AuthState);
  const [loading, setLoading] = useState(false);

  const settingData = useCallback((dataUser: AuthState): void => {
    settingStorage(dataUser);

    api.defaults.headers.common.Authorization = `Bearer ${dataUser.token}`;

    setData(dataUser);
  }, []);

  useEffect(() => {
    function loadStorageData(): void {
      const dataStorage = getStorage();

      if (dataStorage) {
        const dataParse = JSON.parse(dataStorage);

        api.defaults.headers.common.Authorization = `Bearer ${dataParse.token}`;

        settingData(dataParse);
      }
    }
    loadStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = useCallback(
    async (credentials: CredentialProps): Promise<void> => {
      try {
        setLoading(true);

        const response = await api.post('/auth-user/session', credentials);

        settingData(response.data);
        addToast({ message: 'Seja bem vindo(a)', type: 'success' });
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(false);
      }
    },
    [addToast, settingData, triggerError],
  );

  const signOut = useCallback(() => {
    removeStorage();
    setData({} as AuthState);
  }, []);

  const codeVerification = useCallback(
    async (verificationData: CodeVerificationProps): Promise<boolean> => {
      try {
        setLoading(true);
        await api.post('passwords/code-verification', verificationData);
        return true;
      } catch (error) {
        triggerError(error);
        return false;
      } finally {
        setLoading(true);
      }
    },
    [triggerError],
  );

  const createPasswordProps = useCallback(
    async (createPasswordData: CreatePasswordProps): Promise<void> => {
      try {
        setLoading(true);
        const response = await api.post(
          'passwords/change-password',
          createPasswordData,
        );
        settingData(response.data);
        addToast({ message: 'Seja bem vindo(a)', type: 'success' });
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(true);
      }
    },
    [addToast, settingData, triggerError],
  );

  const forgotPassword = useCallback(
    async (email: string): Promise<boolean> => {
      try {
        setLoading(true);
        await api.post('passwords/forgot-password', { email });
        return true;
      } catch (error) {
        triggerError(error);
        return false;
      } finally {
        setLoading(true);
      }
    },
    [triggerError],
  );

  const changePasswordLogged = useCallback(
    async (changePasswordData: ChangePasswordLoggedProps): Promise<void> => {
      try {
        setLoading(true);
        const response = await api.post(
          '/passwords/change-password-logged',
          changePasswordData,
        );
        settingData(response.data);
        addToast({ message: 'Senha atualizada com sucesso.', type: 'success' });
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(true);
      }
    },
    [addToast, settingData, triggerError],
  );

  return (
    <AuthContext.Provider
      value={{
        data,
        loading,
        settingData,
        signIn,
        signOut,
        codeVerification,
        createPasswordProps,
        forgotPassword,
        changePasswordLogged,
      }}
    >
      {/* <GlobalApiInterceptors signOut={signOut} onRefresh={refreshAccessToken} /> */}
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
