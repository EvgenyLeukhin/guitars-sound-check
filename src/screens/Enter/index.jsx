import React from 'react';
import cln from 'classnames';

import './styles.scss';

const Enter = ({ onLogoClick, launch }) => {
  return (
    <div className="enter-screen">
      <div className={cln('door', 'left-door', {'launch': launch })}></div>
      <div className={cln('door', 'right-door', {'launch': launch })}></div>
      <div className="logo" onClick={onLogoClick}>
        <div className={cln('logo__text', {'launch': launch })}>
          Guitars soundcheck
        </div>
      </div>
    </div>
  )
}

export default Enter;
