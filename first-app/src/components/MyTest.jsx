import React from "react";

export class MyTest extends React.Component{

constructor(){
  super();
  console.log('Constructor')
}

componentDidMount(){
  console.log('component mounted')
}

render(){
  return <h1>Render</h1>
}


}