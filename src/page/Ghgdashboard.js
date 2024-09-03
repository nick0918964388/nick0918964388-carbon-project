import React, { useState, useEffect } from 'react';
import { FlexGrid, Row, Column, SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem, Header, HeaderName, HeaderGlobalBar, HeaderGlobalAction, SkipToContent, Tabs, Tab, TabList, TabPanels, TabPanel, Breadcrumb, Grid } from '@carbon/react';
import { Home, Search, Notification, Switcher, Add } from '@carbon/icons-react';
import Sidebar from '../components/Sidebar';
import { Checkbox, Button, TextInput } from '@carbon/react';
import { DefaultBreadcrumb } from '../components/Breadcrumb';
import HeadNavigation from '../components/HeadNavigation';
import { HeaderMenuButton } from '@carbon/react';
import '../css/Dashboard.scss';
import Ghgtrendchart from '../components/chart/Ghgtrendchart';
import Ghggaugechart from '../components/chart/Ghggaugechart';
import GhgDonutChart from '../components/chart/Ghgdonutchart';

import SubmitButton from '../components/SubmitButton';
const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);
  const [selectedHeaderMenu, setSelectedHeaderMenu] = useState('溫室氣體');


  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleMouseMove = (e) => {
    if (e.clientX <= 10) {
      setIsExpanded(true);
    }
  };

  const handleHeaderMenuClick = (menu) => {
    setSelectedHeaderMenu(menu);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="dashboard-container">
      <HeadNavigation onMenuClick={handleHeaderMenuClick} />
      
      {/* <HeaderMenuButton aria-label='Open menu'  /> */}
      
      <div className="main-content">
        {/* <div
          className={`side-nav-container ${isExpanded ? 'expanded' : ''}`}
          onMouseLeave={handleMouseLeave}
        >
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div> */}
        <div className={`content-wrapper }`}>
        <DefaultBreadcrumb selectedHeaderMenu={selectedHeaderMenu} />
        <FlexGrid fullWidth className="dashboard-grid">
            <Row Condensed>
              <Column sm={2} md={{ span: 4, offset: 2 }} className="main-content-column">
                <h4>A1</h4>
                <Ghgtrendchart />
              </Column>
              <Column sm={2} md={{ span: 4, offset: 2 }} className="main-content-column">
              <GhgDonutChart />
              </Column>
              <Column sm={2} md={{ span: 4, offset: 2 }} className="main-content-column">
                <Tabs>
                  <TabList aria-label="List of tabs">
                    <Tab>Dashboard</Tab>
                    <Tab>Monitoring</Tab>
                    <Tab>Activity</Tab>
                    <Tab disabled>Settings</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>Tab Panel 1</TabPanel>
                    <TabPanel>
                      <form style={{
                        margin: '2em'
                      }}>
                        <legend className={`cds--label`}>Validation example</legend>
                        <Checkbox id="cb" labelText="Accept privacy policy" />
                        <Button style={{
                          marginTop: '1rem',
                          marginBottom: '1rem'
                        }} type="submit">
                          Submit
                        </Button>
                        <TextInput type="text" labelText="Text input label" helperText="Optional help text" id="text-input-1" />
                      </form>
                    </TabPanel>
                    <TabPanel>Tab Panel 3</TabPanel>
                    <TabPanel>Tab Panel 4</TabPanel>
                  </TabPanels>
                </Tabs>
              </Column>
            </Row>
            <Row>
              <Column sm={2} md={{ span: 4, offset: 2 }} className="main-content-column">
                <h4>A2</h4>
                <Ghggaugechart value={78} />
              </Column>
              <Column sm={4} md={8} lg={6} className="main-content-column">
                
              </Column>
              <Column sm={4} md={8} lg={6} className="main-content-column">
                <Tabs>
                  <TabList aria-label="List of tabs">
                    <Tab>Dashboard</Tab>
                    <Tab>Monitoring</Tab>
                    <Tab>Activity</Tab>
                    <Tab disabled>Settings</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>Tab Panel 1</TabPanel>
                    <TabPanel>
                      <form style={{
                        margin: '2em'
                      }}>
                        <legend className={`cds--label`}>Validation example</legend>
                        <Checkbox id="cb" labelText="Accept privacy policy" />
                        <Button style={{
                          marginTop: '1rem',
                          marginBottom: '1rem'
                        }} type="submit">
                          Submit
                        </Button>
                        <TextInput type="text" labelText="Text input label" helperText="Optional help text" id="text-input-1" />
                      </form>
                    </TabPanel>
                    <TabPanel>Tab Panel 3</TabPanel>
                    <TabPanel>Tab Panel 4</TabPanel>
                  </TabPanels>
                </Tabs>
              </Column>
            </Row>
            
          </FlexGrid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;