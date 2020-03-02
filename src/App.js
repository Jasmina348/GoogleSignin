import React from 'react';
import './App.css';
import Routes from './Routes'

class App extends React.Component{
  constructor(){
    super();
        this.state={
        appName: "Login with Google using ReactJS and RESTful APIs",
    }
    }
    
    render() {
    return (
    <div>
    <Routes name={this.state.appName}/>
    </div>
    );
    }
}
export default App;
