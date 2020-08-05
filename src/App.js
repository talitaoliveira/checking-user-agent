import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Pages/Main/Main';
import About from './components/Pages/About/About';

const App = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <Main/>
      <About/>
    </div>
  );
}

export default App;
