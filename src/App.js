import React from 'react';
import Reader from './components/Reader/Reader';
import publications from './components/publications.json';

const App = () => (
  <div>
    <Reader items={publications} />
  </div>
);

export default App;
