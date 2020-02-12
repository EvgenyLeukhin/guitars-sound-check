import React from 'react';
import { Link } from 'react-router-dom';

import Add from 'Images/icons/add.svg';

import './styles.scss';

const Second = () => {
  return (
    <section>
      <h2 className="with-icon">Second page</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Add} alt=""/>
        &nbsp;
        <Link to='/'>to home page</Link>
      </div>
    </section>
  );
}

export default Second;
