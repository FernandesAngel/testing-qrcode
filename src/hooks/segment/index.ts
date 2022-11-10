import { api } from '@/services/api';
import { useCallback, useMemo, useState } from 'react';
import { useErrorHandling } from '../error-handling';

import { SegmentHookData, SegmentProps } from './interfaces';

export const useSegments = (): SegmentHookData => {
  const { triggerError } = useErrorHandling();

  const [loading, setLoading] = useState(false);
  const [segments, setSegments] = useState<SegmentProps[]>([]);

  const getSegments = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.get('/segments');
      setSegments(response.data);
    } catch (error) {
      triggerError(error);
    } finally {
      setLoading(false);
    }
  }, [triggerError]);

  return useMemo<SegmentHookData>(
    () => ({
      loading,
      segments,
      getSegments,
    }),
    [loading, segments, getSegments],
  );
};
