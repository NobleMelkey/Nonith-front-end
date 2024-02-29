import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer2 = () => {
  return (
    <footer>
      <div className="last-text">
        <p>@Design By Noble Melchizedek Sam</p>
      </div>
      <div className="top">
        <a href="#home">
          <i className='bx bx-up-arrow-alt'></i>
          <span>
            <SocialIcon url="https://www.example.com" label="Our portfolio" />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer2;
