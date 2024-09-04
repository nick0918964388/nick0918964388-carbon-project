import React, { useState, useEffect } from 'react';
import { TreeView } from '@carbon/react';
import { Document, Add } from '@carbon/react/icons';
import { Button } from '@carbon/react';

const CustomTreeNode = ({ label, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
      <TreeView
        label={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>{label}</span>
            <Button
              kind="ghost"
              size="sm"
              renderIcon={Add}
              iconDescription="新增/修改"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}
            />
          </div>
        }
        renderIcon={Document}
      >
        {children}
      </TreeView>
    );
  };


  export default CustomTreeNode;
