import React from 'react';

import Logo from 'Images/icons/favicon.png';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="page-footer">
      <img src={Logo} alt="Logo"/>
      <h4>Page Footer</h4>
    </footer>
  );
}

export default Footer;
