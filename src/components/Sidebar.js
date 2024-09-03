import React from 'react';
import { SideNav, SideNavItems, SideNavLink,SideNavMenu,SideNavMenuItem } from '@carbon/react';
import { Home, Dashboard, Settings, User,Add } from '@carbon/icons-react';


import '../css/Sidebar.scss'; 

const Sidebar = ({ isExpanded, setIsExpanded }) => {
  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <SideNav
            isFixedNav
            expanded={isExpanded}
            aria-label="Side navigation"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <SideNavItems>
              <SideNavLink renderIcon={Home} href="#" isActive={!isExpanded}>Home</SideNavLink>
              <SideNavMenu title="Designing" isActive={!isExpanded}>
                <SideNavMenuItem href="#">2x Grid</SideNavMenuItem>
                <SideNavMenuItem href="#">Color</SideNavMenuItem>
                <SideNavMenuItem href="#">Icons</SideNavMenuItem>
                <SideNavMenuItem href="#">Pictograms</SideNavMenuItem>
                <SideNavMenuItem href="#">Motion</SideNavMenuItem>
                <SideNavMenuItem href="#">Spacing</SideNavMenuItem>
                <SideNavMenuItem href="#">Themes</SideNavMenuItem>
                <SideNavMenuItem href="#">Typography</SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu title="Guidelines" isActive={!isExpanded}>
                <SideNavMenuItem href="#">Components<Add /></SideNavMenuItem>
                <SideNavMenuItem href="#">Patterns</SideNavMenuItem>
                <SideNavMenuItem href="#">Community assets</SideNavMenuItem>
                <SideNavMenuItem href="#">Data visualization</SideNavMenuItem>
                <SideNavMenuItem href="#">Help</SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink href="#" isActive={!isExpanded}>GitHub</SideNavLink>
            </SideNavItems>
          </SideNav>
  );
};

export default Sidebar;