import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Images/image 1.png';

const Navbar = () => {
  const lighterBackgroundColor = '#E1E1E1';

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ margin: '10px auto', maxWidth: '90%', borderRadius: '20px', backgroundColor: lighterBackgroundColor, padding: '10px 15px', height: '50px' }}>
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center">
          <img src={logo} alt="Logo" style={{ maxWidth: '40px', marginRight: '10px' }} />
          <div className="ms-3">
            <div className="title-wrapper">
              <p className="title mb-0">Bonjour India</p>
            </div>
            <p className="subtitle">LANGUAGES AND MORE</p>
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <span className="nav-link-text font-weight-bold">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-link-text font-weight-bold">About Us</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-link-text font-weight-bold">Services</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-link-text font-weight-bold">Courses</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-link-text font-weight-bold">Contact Us</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-link-text font-weight-bold">Library</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-link-text font-weight-bold">Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span className="nav-link-text font-weight-bold">Schedule</span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
