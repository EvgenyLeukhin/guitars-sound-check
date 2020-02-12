import React from 'react';

import Logo from 'Images/js.png';

import './styles.scss';

const Header = () => {
  return (
    <header className="page-header">
      <img src={Logo} alt="Logo"/>
      <h4>Page Header</h4>
    </header>
  );
}

export default Header;
