import React from 'react';
import './Profile.css';
import gvtlogo from '../assets/gvtlogo.png';
import bmhlogo from '../assets/bmhlogo.png';


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
            <li>  <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              HR Self Services 
            </a></li>
          
           <li>  <a href="https://mail.bmh.or.tz/" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              Government Mail
            </a></li>
           <li>  <a href="http://192.168.1.10:8888/MappingTagHIMS/#/auth/login" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              MappingTagHims
            </a></li>
           <li>  <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              eOffice
            </a></li>
           <li>  <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              NeST
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              Muse
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
             <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Medisynapse
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              eMirejesho
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
             <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              MediPro4
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
           <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Vitambulisho
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
             <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Mikataba
            </a></li>
        </ul>
      </div>

      <div className="ict-services">
        <h4>ICT Services</h4>
        <ul>
              <li>  <a href="#" target="_blank" rel="noreferrer">
             <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              ICT Help Desk
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
             <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Acces Form
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
           <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Change Request
            </a></li>
             <li>  <a href="#" target="_blank" rel="noreferrer">
             <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              FAQ
            </a></li>
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


    