import React from "react";
import './TopBar.css';
import gvtlogo from '../assets/gvtlogo.png';
import bmhlogo from '../assets/bmhlogo.png';

const TopBar = () => {
return(
    <div className="topbar">
      <div className="left-logo">
        <img src={gvtlogo} alt="Gov Logo" className="gvtlogo" />
      </div>
      <div className="title">
        <h3>WIZARA YA AFYA</h3>
        <h2>HOSPITALI YA BENJAMINI MKAPA</h2>
      </div>
      <div className="right-logo">
        <img src={bmhlogo} alt="BMH Logo" className="bmhlogo" />
      </div>
    </div>
);

};

export default TopBar;