import React from 'react';

const Home = ({ match }) => (
  <div>
    <h3>{match.params.id}</h3>
  </div>
);

export default Home;
