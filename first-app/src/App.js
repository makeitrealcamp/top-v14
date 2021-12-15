import React, { useState } from 'react';

import { Button, Button as ButtonComponnent } from './components/Button';
import { Footer } from './components/Footer';

import { Header } from './components/Header'
import { Number } from './components/Number';
import { Title } from './components/Title';

import styled from 'styled-components';

import { Button as BButton } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './App.module.css'
import sass from './styles.module.scss'
import { MyTest } from './components/MyTest';
import { MyFnText } from './components/MyFnText';

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
    <MyTest />
    <MyFnText/>
    {/* <button className={styles.button} onClick={up} >UP</button>
    <h1>{state}</h1>
    <button  className={sass.button} onClick={down} >DOWN</button>
    <br />
    <ButtonComponnent text='UP!' handleClick={up} />
    <Number number={state} />
    <ButtonComponnent text='DOWN!' handleClick={down} />
    <MyButton onClick={()=>console.log('Clicked') } >Click Style Components</MyButton>

    <BButton variant="success" >Boostrap Button</BButton> */}
  </>
  );
}




// class App extends React.Component {
//   render() {
//    return <h1>Hello world from class component</h1>
//   }
// }



const MyButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const MyDiv = styled.div`


`

export default App;
