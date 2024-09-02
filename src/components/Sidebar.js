import React, { useState } from 'react';
import { SideNav, SideNavItems, SideNavLink } from '@carbon/react';
import { Home, Dashboard, Settings, User } from '@carbon/icons-react';
import '../css/Sidebar.scss'; 

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`sidebar-container ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <SideNav isFixedNav expanded={isExpanded} className="side-nav">
        <SideNavItems>
          <SideNavLink renderIcon={Home} href="#">Home</SideNavLink>
          <SideNavLink renderIcon={Dashboard} href="#">Dashboard</SideNavLink>
          <SideNavLink renderIcon={Settings} href="#">Settings</SideNavLink>
          <SideNavLink renderIcon={User} href="#">User</SideNavLink>
          {/* Add more SideNavLink items as needed */}
        </SideNavItems>
      </SideNav>
    </div>
  );
};

export default Sidebar;