import React, { useState, useEffect } from 'react';
import { FlexGrid, Grid, Row, Column, Form, TextInput, Select, SelectItem, DatePicker, DatePickerInput, Button } from '@carbon/react';
import { DefaultBreadcrumb } from '../components/Breadcrumb';
import HeadNavigation from '../components/HeadNavigation';

import { TreeView, TreeNode } from '@carbon/react';
import { Document, Folder,Factor,IbmCloudPakSystem,Subclassification } from '@carbon/react/icons';

const L2site = () => {
  const [selectedHeaderMenu, setSelectedHeaderMenu] = useState('廠區(L2)管理');

  const handleHeaderMenuClick = (menu) => {
    setSelectedHeaderMenu(menu);
  };

  const [formData, setFormData] = useState({
    locationCode: '',
    locationDescription: '',
    status: '',
    modifiedBy: '',
    modifiedDate: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, modifiedDate: date });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('表單提交', formData);
    // 這裡處理表單提交邏輯
  };

  const handleCancel = () => {
    setFormData({
      locationCode: '',
      locationDescription: '',
      status: '',
      modifiedBy: '',
      modifiedDate: '',
    });
  };

  const nodes = [{
    id: '1',
    value: 'tsmc',
    label: <span>tsmc</span>,
    isExpanded: true,
    renderIcon: Factor,
    children: [{
      id: '1-1',
      value: 'F12P12',
      label: 'F12P12',
      isExpanded: true,
      renderIcon: Factor,
      children: [{
        id: '1-1-1',
        value: 'ME',
        label: <span>ME</span>,
        isExpanded: true,
        renderIcon: Factor,
        children: [{
          id: '1-1-1-1',
          value: 'WRT',
          label: '純水系統',
          isExpanded: true,
          renderIcon: IbmCloudPakSystem
        }, {
          id: '1-1-1-2',
          value: 'WT',
          label: '水課',
          isExpanded: true,
          renderIcon: IbmCloudPakSystem
        }, {
          id: '1-1-1-3',
          value: 'AIR',
          label: '氣化課',
          isExpanded: true,
          renderIcon: Subclassification
        },]
      }, {
        id: '1-1-2',
        value: 'WT',
        label: '水課',
        isExpanded: true,
        renderIcon: Document
      }, {
        id: '1-1-3',
        value: 'AIR',
        label: '氣化課',
        isExpanded: true,
        renderIcon: Document
      },]
    }, {
      id: '1-2',
      value: 'F12P3',
      label: 'F12P3',
      renderIcon: Document
    }, {
      id: '1-3',
      value: 'F12P45',
      label: 'F12P45',
      renderIcon: Document
    },]

  }];
  function renderTree({
    nodes,
    expanded,
    withIcons = false
  }) {
    if (!nodes) {
      return;
    }
    return nodes.map(({
      children,
      renderIcon,
      isExpanded,
      ...nodeProps
    }) => <TreeNode key={nodeProps.id} renderIcon={withIcons ? renderIcon : null} isExpanded={expanded ?? isExpanded} {...nodeProps}>
        {renderTree({
          nodes: children,
          expanded,
          withIcons
        })}
      </TreeNode>);
  }




  return (
    <div className="dashboard-container">
      <HeadNavigation onMenuClick={handleHeaderMenuClick} />

      {/* <HeaderMenuButton aria-label='Open menu'  /> */}

      <div className="main-content">
        <div
          className={`side-nav-container `}
        >

        </div>
        <div className={`content-wrapper }`}>
          <DefaultBreadcrumb selectedHeaderMenu={selectedHeaderMenu} />
          <Grid>
            {/* TreeView */}
            <Column sm={2} md={3} lg={6}>
              <Grid className="main-content-column1">

                <Column sm={4} md={8} lg={12} >
                  <TreeView label="組織結構">
                    {renderTree({
                      nodes,
                      withIcons: true
                    })}
                  </TreeView>
                </Column>
                <Column sm={4} md={8} lg={4} >
                </Column>
              </Grid>
            </Column>
            {/* Properties */}
            <Column sm={2} md={3} lg={10}>
              <Grid className="main-content-column1">

                <Column sm={2} md={3} lg={4} >
                  <TextInput
                    id="locationCode"
                    labelText="場區代碼"
                    value={formData.locationCode}
                    onChange={handleInputChange}
                  />
                </Column>
                <Column sm={2} md={3} lg={4}>
                  <TextInput
                    id="locationCode"
                    labelText="場區代碼"
                    value={formData.locationCode}
                    onChange={handleInputChange}
                  />
                </Column>
                <Column sm={2} md={3} lg={4}>
                  <TextInput
                    id="locationCode"
                    labelText="場區代碼"
                    value={formData.locationCode}
                    onChange={handleInputChange}
                  />
                </Column>
                <Column sm={2} md={3} lg={4}>
                  <TextInput
                    id="locationCode"
                    labelText="場區代碼"
                    value={formData.locationCode}
                    onChange={handleInputChange}
                  />
                </Column>
                <Column sm={2} md={3} lg={4}>
                  <TextInput
                    id="locationCode"
                    labelText="場區代碼"
                    value={formData.locationCode}
                    onChange={handleInputChange}
                  />
                </Column>
              </Grid>
            </Column>
          </Grid>


        </div>
      </div>
    </div>
  );
};

export default L2site;