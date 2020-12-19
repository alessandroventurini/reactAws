import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import TestLambda from "./TestLambda";



const Main = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/signin' component={Signup}/>
            <Route path='/login' component={Login}/>
            <Route path='/lambda' component={TestLambda}/>
        </Switch>
    </BrowserRouter>
)


export default Main;