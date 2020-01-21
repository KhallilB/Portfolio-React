import React from 'react';
import './Bottom.css';

import TabMenu from '../tabMenu/TabMenu';
import Button from '../../utils/button/Button';

const Bottom = () => (
    <div className="bottom-container" id="about">
        <div className="tab-container">
            <TabMenu></TabMenu>
        </div>
        <div className="button-container">
            <Button link={'/portfolio'}></Button>
        </div>
    </div>
)

export default Bottom;