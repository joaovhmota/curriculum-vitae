import { memo, useMemo } from 'react';
import type { IRepository } from '../models/IRepository';
import { Badge, Card, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/AxiosClient';
import type { IActionsRun } from '../models/IActionsRun';

interface IProjectsListItem {
    repository: IRepository;
}

const healthStatusColors = {
    Healthy: 'green',
    Unhealthy: 'red',
    Checking: 'blue',
} as const;

const { Text } = Typography;

const ProjectsListItem = ({ repository }: IProjectsListItem) => {
    const sanitizedRepoName = useMemo(() =>
        repository.name.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' '),
        [repository.name]
    );

    const actions = useMemo(() => [
        <a key="github" href={repository.html_url} target="_blank" rel="noopener noreferrer">
            <GithubOutlined />
        </a>
    ], [repository.html_url]);

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData', repository.id],
        queryFn: async () => {
            const response = await axiosInstance.get<IActionsRun>(
                `repos/joaovhmota/${repository.name}/actions/runs?per_page=1`
            );
            return response.data;
        },
    });

    const completedRuns = useMemo(() =>
        data?.workflow_runs.filter(x => x.status === 'completed') ?? [],
        [data]
    );

    const healthStatus = useMemo((): keyof typeof healthStatusColors => {
        if (isPending) return 'Checking';
        if (error || completedRuns.length === 0) return 'Unhealthy';
        return completedRuns.some(x => x.conclusion !== 'success') ? 'Unhealthy' : 'Healthy';
    }, [isPending, error, completedRuns]);

    const extra = useMemo(() => (
        <Badge
            color={healthStatusColors[healthStatus]}
            text={healthStatus === 'Checking' ? 'Checking health…' : healthStatus}
        />
    ), [healthStatus]);

    return (
        <Card title={sanitizedRepoName} actions={actions} loading={isPending} extra={extra}>
            <Text>{repository.description}</Text>
        </Card>
    );
};

export default memo(ProjectsListItem);