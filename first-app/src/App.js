import React, { useState } from 'react';
import { Button } from './components/Button';
import { Footer } from './components/Footer';

import { Header } from './components/Header'
import { Number } from './components/Number';
import { Title } from './components/Title';


import './App.css'

function App() {
  const [state, setState] = useState(0)
  console.log('render')
  console.log(state)

  const up = () => {
    setState(state + 1)

  }
  const down = () => {
    setState(state - 1)
  }


  return (<>
    <button onClick={up} >UP</button>
    <h1>{state}</h1>
    <button onClick={down} >DOWN</button>
    <br/>
    <Button text='UP!' handleClick={up} />
    <Number number={state} />
    <Button text='DOWN!' handleClick={down} />
  </>
  );
}

// class App extends React.Component {
//   render() {
//    return <h1>Hello world from class component</h1>
//   }
// }



export default App;
