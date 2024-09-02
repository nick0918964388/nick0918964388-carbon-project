import React from 'react';
import { Grid, Row, Column } from '@carbon/react';
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem } from '@carbon/react';
import { LineChart, PieChart, SimpleBarChart } from '@carbon/charts-react';
import '../css/Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideNav isFixedNav expanded className="side-nav">
        <SideNavItems>
          <SideNavMenu title="Menu 1">
            <SideNavMenuItem href="#">Submenu 1</SideNavMenuItem>
            <SideNavMenuItem href="#">Submenu 2</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="Menu 2">
            <SideNavMenuItem href="#">Submenu 1</SideNavMenuItem>
            <SideNavMenuItem href="#">Submenu 2</SideNavMenuItem>
          </SideNavMenu>
        </SideNavItems>
      </SideNav>
      <div className="content">
        <div className="chart-row">
          <div className="chart-column">
            <LineChart data={[]} options={{ title: 'Chart 1' }} />
          </div>
          <div className="chart-column">
            <PieChart data={[]} options={{ title: 'Chart 2' }} />
          </div>
          <div className="chart-column">
            <SimpleBarChart data={[]} options={{ title: 'Chart 3' }} />
          </div>
        </div>
        <div className="chart-row">
          <div className="chart-column">
            <LineChart data={[]} options={{ title: 'Chart 4' }} />
          </div>
          <div className="chart-column">
            <PieChart data={[]} options={{ title: 'Chart 5' }} />
          </div>
          <div className="chart-column">
            <SimpleBarChart data={[]} options={{ title: 'Chart 6' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;