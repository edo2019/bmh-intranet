import React, { useState } from 'react';
import './Profile.css';
import gvtlogo from '../assets/gvtlogo.png';
import bmhlogo from '../assets/bmhlogo.png';

const Profile = () => {
  // States to control expansion
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [isHRServicesOpen, setIsHRServicesOpen] = useState(false);

  return (
    <div className="profile">
      <div className="quick-links">
        <h4>QUICK LINKS</h4>
        <ul>
          <li>
            {/* HR Self Services parent link */}
            <button
              type="button"
              onClick={() => setIsHRServicesOpen(!isHRServicesOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              HR Self Services
            </button>
            {/* Sub-links shown when expanded */}
            {isHRServicesOpen && (
              <ul className="sub-links">
                <li>
                    <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
                  <a href="https://example.com/hr/payslip" target="_blank" rel="noreferrer">Payslip Service</a>
                </li>
                <li>
                    <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
                  <a href="https://example.com/hr/leave" target="_blank" rel="noreferrer">Leave Application</a>
                </li>
                <li>
                    <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
                  <a href="https://example.com/hr/performance" target="_blank" rel="noreferrer">Performance Review</a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a href="https://mail.bmh.or.tz/" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              Government Mail
            </a>
          </li>
          <li>
            <a href="http://192.168.1.10:8888/MappingTagHIMS/#/auth/login" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              MappingTagHims
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              eOffice
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              NeST
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              Muse
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Medisynapse
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={gvtlogo} alt="gvtlogo" className="gvtlogo" />
              eMirejesho
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              MediPro4
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Vitambulisho
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Mikataba
            </a>
          </li>
        </ul>
      </div>

      <div className="ict-services">
        <h4>ICT Services</h4>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              ICT Help Desk
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Access Form
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              Change Request
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={bmhlogo} alt="bmhlogo" className="bmhlogo" />
              FAQ
            </a>
          </li>
        </ul>
      </div>

      <div className="documents-repository">
        <h4>Documents Repository</h4>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => setIsPolicyOpen(!isPolicyOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Policy (PDF)
            </button>
            {isPolicyOpen && (
              <ul className="sub-links">
                <li><a href="#">Policy Document 1</a></li>
                <li><a href="#">Policy Document 2</a></li>
                <li><a href="#">Policy Document 3</a></li>
              </ul>
            )}
          </li>
          <li>Form 1 (PDF)</li>
          <li>Form 2 (PDF)</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
