import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";



const Main = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/signin' component={Signup}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </BrowserRouter>
)


export default Main;