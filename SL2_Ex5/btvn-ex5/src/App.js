import React from 'react';
import GridDemo from './Grid';
import FptHomePage from './FPTPage';
import FapClonePage from './FapClonePage';

function App() {
  return (
    <div className="container mt-5">
      <GridDemo />
      <FptHomePage />
      <br />
      <FapClonePage />
    </div>
  );
}

export default App;