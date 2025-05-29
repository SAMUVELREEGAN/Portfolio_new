// src/Components/MenuFloatIcon.jsx
import React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './MenuFloatIcon.css';

const MenuFloatIcon = ({ onClick }) => {
  return (
    <div className="menu-float" onClick={onClick}>
      <MenuOpenIcon className="menu-icon" />
    </div>
  );
};

export default MenuFloatIcon;
