
export interface JobHistoryDTO   {
    id: string;
    startTime: string;
    endTime: string;
    elapsedTime: string;
    watchListed: boolean;
    jobId: number;
    jobName: string;
    batchId: number;
    batchStageHistoryId: number;
}
