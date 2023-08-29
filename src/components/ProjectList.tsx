import React from 'react';
import { ProjectListProps } from '../models/types';

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div>
            {projects.map((project, index) => (
                <img key={index} src={project.img} alt={project.category} />
            ))}
        </div>
    );
};

export default ProjectList;
