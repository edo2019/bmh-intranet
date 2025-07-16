import React, { useState } from 'react';
import './ExecutiveProfile.css';
import bossBmh from '../assets/bossBmh.jpeg';

const ExecutiveProfile = () => {
 

  return (
<div className="profile-card">
      <div className="title">EXECUTIVE DIRECTOR</div>
      <div className="profile-image-wrapper">
        <img
          src={bossBmh}
          alt="Executive Director"
          className="profile-image"
        />
      </div>
      <div className="name">Prof. Abel Makubi</div>
    </div>
  );
};

export default ExecutiveProfile;
