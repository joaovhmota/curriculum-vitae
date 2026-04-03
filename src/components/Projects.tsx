import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import axiosInstance from '../api/AxiosClient';
import type { IRepository } from '../models/IRepository';
import { Flex, Spin, Typography } from 'antd';
import ProjectsList from './ProjectsList';

const { Text } = Typography;

const Projects = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => (await axiosInstance.get<IRepository[]>("users/joaovhmota/repos")).data,
    });
    const projectRepositories = useMemo(() => data?.filter(x => x.topics.some(x => x === 'project')) ?? [], [data]);

    if (isPending) {
        return <Spin />;
    }

    if (error) {
        return <Text type='danger'>Error fetching repositories. Reason: {error?.message ?? 'Unknown error'}</Text>;
    }

    return (
        <Flex gap={8}>
            <ProjectsList repositories={projectRepositories} />
        </Flex>
    );
};

export default Projects;