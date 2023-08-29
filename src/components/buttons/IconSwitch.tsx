import React from 'react';
import {IconSwitchProps} from "../../models/types";

const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => {
    return (
        <div className="icon-switch">
            <i className="material-icons" onClick={onSwitch}>{icon}</i>
        </div>
    );
};

export default IconSwitch;
