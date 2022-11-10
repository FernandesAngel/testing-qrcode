export interface SectorProps {
  id: string;
  value: string;
  label: string;
  segmentId: string;
}
export interface SectorHookData {
  loading: boolean;
  sectors: SectorProps[];
  getSectors: (segmentId: string) => Promise<void>;
}
