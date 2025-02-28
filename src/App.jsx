import React from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
import Background from './components/Background';
import Weather from './components/Weather';

import './styles/Layout.css'
function App(props) {
  return (
    <>
      <Background></Background>
      <Clock></Clock>
      <Header></Header>
      <Weather></Weather>
      <div className='container'>
        {/* <TodoList></TodoList> */}
      </div>
    </>
  );
}

export default App;