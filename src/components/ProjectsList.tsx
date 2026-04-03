import { memo } from 'react';
import type { IRepository } from '../models/IRepository';
import ProjectsListItem from './ProjectsListItem';

interface IProjectList {
    repositories: IRepository[];
}

const ProjectsList = ({ repositories }: IProjectList) => {
    return (
        repositories.map(repo => (
            <ProjectsListItem key={repo.id} repository={repo} />
        ))
    );
};

export default memo(ProjectsList);