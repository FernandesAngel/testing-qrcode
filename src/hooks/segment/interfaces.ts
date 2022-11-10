export interface SegmentProps {
  id: string;
  value: string;
  label: string;
}
export interface SegmentHookData {
  loading: boolean;
  segments: SegmentProps[];
  getSegments: () => Promise<void>;
}
