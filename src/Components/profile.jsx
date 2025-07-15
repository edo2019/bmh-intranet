import React from 'react';
import './Profile.css';


const Profile = () => {
    return (
      <div className="profile">
      {/* <h3>PROFILE</h3>
      <p><strong>Name:</strong> Juma Ally</p>
      <p><strong>Email:</strong> juma.ally@bmh.or.tz</p>
      <p><strong>Phone:</strong> 0744455899</p> */}
      
      <div className="quick-links">
        <h4>QUICK LINKS</h4>
        <ul>
          <li>HR Self Services</li>
          <li>e-Request Management</li>
          <li>e-Office</li>
          <li>Gov-Mail</li>
          <li>e-Mrejesho</li>
        </ul>
      </div>

      <div className="ict-services">
        <h4>ICT Services</h4>
        <ul>
          <li>ICT Help Desk</li>
          <li>Access Form</li>
          <li>Change Request</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="documents-repository">
        <h4>Documents Repository</h4>
        <ul>
          <li>Policy (PDF)</li>
          <li>Form 1 (PDF)</li>
          <li>Form 2 (PDF)</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;


    