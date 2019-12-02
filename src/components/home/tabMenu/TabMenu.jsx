import React from 'react';
import './TabMenu.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            tabIndex: 0
        };
    }

    render() {
        return (
            <div className="tabContainer">
                <Tabs
                    activeTab={{
                        id: "about"
                    }}
                    selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}
                >
                    <TabList>
                        <Tab id="about" title="About Me">About Me</Tab>
                        <Tab id="education" title="Education">Education</Tab>
                        <Tab id="experience" title="Experience">Experience</Tab>
                    </TabList>

                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt eget nullam non nisi est. Tristique senectus et netus et malesuada fames. Praesent tristique magna sit amet purus gravida quis. Feugiat in fermentum posuere urna nec tincidunt. Elit duis tristique sollicitudin nibh sit amet commodo.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Enim lobortis scelerisque fermentum dui faucibus.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa id neque. Non pulvinar neque laoreet suspendisse.</p>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default TabMenu;