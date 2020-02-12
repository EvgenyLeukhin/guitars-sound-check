import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section>
      <h2>Home page</h2>

      <Link to='/second-page'>to second page</Link>
    </section>
  );
}

export default Home;
