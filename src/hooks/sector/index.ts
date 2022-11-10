import { api } from '@/services/api';
import { useCallback, useMemo, useState } from 'react';
import { useErrorHandling } from '../error-handling';

import { SectorHookData, SectorProps } from './interfaces';

export const useSector = (): SectorHookData => {
  const { triggerError } = useErrorHandling();

  const [loading, setLoading] = useState(false);
  const [sectors, setSectors] = useState<SectorProps[]>([]);

  const getSectors = useCallback(
    async (segmentId: string): Promise<void> => {
      try {
        setLoading(true);
        const response = await api.get(`/sectors/${segmentId}`);
        setSectors(response.data);
      } catch (error) {
        triggerError(error);
      } finally {
        setLoading(false);
      }
    },
    [triggerError],
  );

  return useMemo<SectorHookData>(
    () => ({
      loading,
      sectors,
      getSectors,
    }),
    [loading, sectors, getSectors],
  );
};
