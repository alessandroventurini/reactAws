import React, {Component} from 'react';
import Form from "./Form";


class Login extends Component{

    state = {
        email: '',
        password:''
    }

    render() {
        return(
            <Form type={'login'}/>
        )
    }

}

export default Login;