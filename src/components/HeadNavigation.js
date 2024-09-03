import React, { useState } from 'react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenu,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  SideNav,
  SideNavItems,
  SideNavLink,
  SkipToContent,
  HeaderSideNavItems,
} from '@carbon/react';
import { Search, Notification, Switcher as SwitcherIcon, Menu } from '@carbon/icons-react';

export const HeadNavigation = ({ onMenuClick }) => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);
  const [isHeaderMenuExpanded, setIsHeaderMenuExpanded] = useState(false); // 新增状态变量
  const onClickSideNavExpand = () => setIsSideNavExpanded(!isSideNavExpanded);
  const onClickHeaderMenuExpand = () => setIsHeaderMenuExpanded(!isHeaderMenuExpanded); // 新增点击处理函数

  const handleMenuItemClick = (menuName) => {
    if (onMenuClick) {
      onMenuClick(menuName);
    }
  };
  const menuItems = [
    {
      label: '溫室氣體',
      type: 'menu',
      items: [
        { label: '溫室氣體管理', onClick: () => handleMenuItemClick('溫室氣體管理') }
      ]
    },
    { label: '能源管理', onClick: () => handleMenuItemClick('能源管理') },
    { label: '水資源管理', onClick: () => handleMenuItemClick('水資源管理') },
    { label: '零廢棄物', onClick: () => handleMenuItemClick('零廢棄物') },
    { label: '空氣汙染防制', onClick: () => handleMenuItemClick('空氣汙染防制') },
    {
      label: '位置管理',
      type: 'menu',
      items: [
        { label: '組織(L1)管理', onClick: () => handleMenuItemClick('組織(L1)管理') },
        { label: '場區(L2)管理', onClick: () => handleMenuItemClick('場區(L2)管理') },
        { label: '部門(L3)管理', onClick: () => handleMenuItemClick('部門(L3)管理') }
      ]
    },
    {
      label: '設備/組件管理',
      type: 'menu',
      items: [
        { label: '設備(L4)管理', onClick: () => handleMenuItemClick('設備(L4)管理') },
        { label: '組件(L5)管理', onClick: () => handleMenuItemClick('組件(L5)管理') }
      ]
    },
    { label: '分類管理', onClick: () => handleMenuItemClick('分類管理') },
    {
      label: '計量管理',
      type: 'menu',
      items: [
        { label: '溫室氣體', onClick: () => handleMenuItemClick('溫室氣體') },
        { label: '能源', onClick: () => handleMenuItemClick('能源') },
        { label: '水資源', onClick: () => handleMenuItemClick('水資源') },
        { label: '廢棄物', onClick: () => handleMenuItemClick('廢棄物') },
        { label: '其他', onClick: () => handleMenuItemClick('其他') }
      ]
    }
  ];

  return (
    <div>
      <Header aria-label="IBM ESG Platform">
        <SkipToContent />
        <HeaderMenuButton aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'} onClick={onClickSideNavExpand} isActive={isSideNavExpanded} aria-expanded={isSideNavExpanded} />
        <HeaderName href="#" prefix="IBM ">
          ESG Platform
        </HeaderName>
        <HeaderNavigation aria-label="IBM ESG Platform">


          {menuItems.map((item, index) => (
            item.type === 'menu' ? (
              <HeaderMenu key={index} aria-label={item.label} menuLinkName={item.label}>
                {item.items.map((subItem, subIndex) => (
                  <HeaderMenuItem key={subIndex} href="#" onClick={subItem.onClick}>
                    {subItem.label}
                  </HeaderMenuItem>
                ))}
              </HeaderMenu>
            ) : (
              <HeaderMenuItem key={index} href="#" onClick={item.onClick}>
                {item.label}
              </HeaderMenuItem>
            )
          ))}
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={() => console.log('search click')}>
            <Search size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Notifications" onClick={() => console.log('notification click')}>
            <Notification size={20} />
          </HeaderGlobalAction>
          {/* <HeaderGlobalAction aria-label={isSideNavExpanded ? 'Close switcher' : 'Open switcher'} aria-expanded={isSideNavExpanded} isActive={isSideNavExpanded} onClick={onClickSideNavExpand} tooltipAlignment="end" id="switcher-button">
            <SwitcherIcon size={20} />
          </HeaderGlobalAction> */}

        </HeaderGlobalBar>
        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false} onSideNavBlur={onClickSideNavExpand}>
          <SideNavItems>
            <HeaderSideNavItems>
              {menuItems.map((item, index) => (
                item.type === 'menu' ? (
                  <HeaderMenu key={index} aria-label={item.label} menuLinkName={item.label}>
                    {item.items.map((subItem, subIndex) => (
                      <HeaderMenuItem key={subIndex} href="#" onClick={subItem.onClick}>
                        {subItem.label}
                      </HeaderMenuItem>
                    ))}
                  </HeaderMenu>
                ) : (
                  <HeaderMenuItem key={index} href="#" onClick={item.onClick}>
                    {item.label}
                  </HeaderMenuItem>
                )
              ))}
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </Header>
    </div>
  );
};

export default HeadNavigation;