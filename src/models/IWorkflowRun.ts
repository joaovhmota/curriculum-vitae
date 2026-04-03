interface IWorkflowRun {
    id: number;
    status: string;
    conclusion: string | null;
}

export type {
    IWorkflowRun
};