import React from 'react';
import Navbar from './navigation/Navbar';
import GitHub from './github/GitHub';
import Header from './header/Header';
import About from './about/About';
import CDN from './cdn/CDN';
import Docs from './docs/Documentation';
import ReleaseNotes from './releasenotes/ReleaseNotes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GitHub/>
      <Header/>
      <About/>
      <CDN />
      <Docs />
      <ReleaseNotes />
    </div>
  );
}

export default App;
