import React from 'react';
import './TabMenu.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabMenu = () => (
    <Tabs
        activeTab={{

        }}
    >
        <TabList>
            <Tab id="about" title="About Me">About Me</Tab>
            <Tab id="education" title="Education">Education</Tab>
            <Tab id="experience" title="Experience">Experience</Tab>
        </TabList>

        <TabPanel>
            <h1>Tab1 Content</h1>
        </TabPanel>
        <TabPanel>
            <h1>Tab2 Conent</h1>
        </TabPanel>
    </Tabs>
)

export default TabMenu;