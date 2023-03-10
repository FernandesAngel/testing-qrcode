import { ReactNode } from "react";

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
}
//
