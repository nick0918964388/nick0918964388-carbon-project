import React, { useState, useEffect } from 'react';
import { FlexGrid, Grid, Row, Column, Form, TextInput, Select, SelectItem, DatePicker, DatePickerInput, Button } from '@carbon/react';
import { DefaultBreadcrumb } from '../components/Breadcrumb';
import HeadNavigation from '../components/HeadNavigation';
import '../css/Location.scss';
import { TreeView, TreeNode } from '@carbon/react';
import { Document, Folder } from '@carbon/react/icons';

const L1org = () => {
  const [selectedHeaderMenu, setSelectedHeaderMenu] = useState('組織(L1)管理');

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
    renderIcon: Document,
    children: [{
      id: '1-1',
      value: 'F12P12',
      label: 'F12P12',
      isExpanded: true,
      renderIcon: Document,
      children: [{
        id: '1-1-1',
        value: 'ME',
        label: <span>ME</span>,
        isExpanded: true,
        renderIcon: Document,
        children: [{
          id: '1-1-1-1',
          value: 'WRT',
          label: '純水系統',
          isExpanded: true,
          renderIcon: Document
        }, {
          id: '1-1-1-2',
          value: 'WT',
          label: '水課',
          isExpanded: true,
          renderIcon: Document
        }, {
          id: '1-1-1-3',
          value: 'AIR',
          label: '氣化課',
          isExpanded: true,
          renderIcon: Document
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
          <FlexGrid fullWidth className="dashboard-grid">
          <Row>
            <Column sm={4} md={4} lg={4} className="main-content-column">
              <TreeView label="組織結構">
                {renderTree({
                  nodes,
                  withIcons: true
                })}
              </TreeView>
            </Column>
          </Row>
          <Row>
            <Column sm={8} md={8} lg={8} className="main-content-column">
              <Form>
                <TextInput
                  id="orgName"
                  labelText="組織名稱"
                  placeholder="輸入組織名稱"
                />
                <TextInput
                  id="orgCode"
                  labelText="組織代碼"
                  placeholder="輸入組織代碼"
                />
                <Select id="orgType" defaultValue="placeholder-item" labelText="組織類型">
                  <SelectItem disabled hidden value="placeholder-item" text="選擇組織類型" />
                  <SelectItem value="company" text="公司" />
                  <SelectItem value="department" text="部門" />
                  <SelectItem value="team" text="團隊" />
                </Select>
                <TextInput
                  id="parentOrg"
                  labelText="上級組織"
                  placeholder="輸入上級組織"
                />
                <Button kind="primary" type="submit">
                  新增
                </Button>
              </Form>
            </Column>
          </Row>

          </FlexGrid>
        </div>
      </div>
    </div>
  );
};

export default L1org;