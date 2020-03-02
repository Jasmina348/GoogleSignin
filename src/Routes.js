import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import SignInPage from './components/SignInPage'
import Home from './components/Home'
import Hello from './components/Hello'

const Routes = () => (
    <BrowserRouter >
        <Switch>
        <Route exact path="/" component={Hello}/>
        <Route path="/home" component={Home}/>
       </Switch>
    </BrowserRouter>
    );
export default  Routes; 
