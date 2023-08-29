import React from 'react';
import {ToolbarProps} from '../models/types'
const Toolbar: React.FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {
    return (
        <div>
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => onSelectFilter(filter)}
                    className={selected === filter ? 'active' : ''}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Toolbar;
