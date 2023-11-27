export interface COBHistoryDTO  {
  id: number;
  initialJTAnalyzed: string;
  latestRecordedJTAnalyzed: string;
  totalJTAnalyzed: number;
  fastestCOBElapsedTime: string;
  averageCOBElapsedTime: string;
  slowestCOBElapsedTime: string;
  totalCOBElapsedTime: string;
}
