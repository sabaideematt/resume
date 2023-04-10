import React from 'react';
import Header from './components/Header.tsx';
import Skills from './components/Skills.tsx';
import WorkHistory from './components/WorkHistory.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills />
      <WorkHistory />
    </div>
  );
}

export default App;
