import React, {Component} from 'react';
import Form from "./Form";

class Signup extends Component{

    state = {
        email: '',
        password: ''
    }

    render() {
        return(
        <Form type={'signin'}/>
        )
    }

}

export default Signup;