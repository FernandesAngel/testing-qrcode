import { api } from "@/services/api";
import { useCallback, useMemo, useState } from "react";
import { useErrorHandling } from "../error-handling";

import { CompanyHookData, CreateCompanyProps } from "./interfaces";

export const useCompany = (): CompanyHookData => {
  const { triggerError } = useErrorHandling();

  const [loading, setLoading] = useState(false);

  const createCompany = useCallback(
    async (company: CreateCompanyProps) => {
      try {
        setLoading(true);
        await api.post("/companies", company);

        return true;
      } catch (error) {
        triggerError(error);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [triggerError]
  );

  return useMemo<CompanyHookData>(
    () => ({
      loading,
      createCompany,
    }),
    [loading, createCompany]
  );
};
