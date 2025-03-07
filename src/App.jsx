import React from 'react';
import Clock from './components/Clock';
import Header from './components/Header';
import Background from './components/Background';
import Weather from './components/Weather';
import TodoList from './components/TodoList';

import './styles/Layout.css'
import './styles/Weather.css'
import './styles/Clock.css'
import './styles/Header.css'
import './styles/TodoList.css'

function App(props) {
  return (
    <>
      <Background></Background>
      <Weather></Weather>
      <Clock></Clock>
      <Header></Header>
      <div className='container'>
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default App;