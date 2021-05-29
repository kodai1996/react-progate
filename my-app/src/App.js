import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{
  constructor(props) {
    super(props);
    // stateを定義してください
    this.state = {name: 'abaa',count: 0};
    
  }
  handleClick(name){
    this.setState({name: name});
  }

  handleClick2(){
    this.setState({count: this.state.count + 1})
  }
  render(){
    console.log(this.state);
  return (
      <div>
        <h1>Hello React</h1>
        <button onClick={()=>{this.handleClick('asdg')}}>{this.state.name}</button>
        <div>
          {this.state.count}
          <button onClick={()=>{this.handleClick2()}}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
