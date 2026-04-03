import type { IWorkflowRun } from "./IWorkflowRun";

interface IActionsRun {
    total_count: number;
    workflow_runs: IWorkflowRun[];
}

export type {
    IActionsRun
};