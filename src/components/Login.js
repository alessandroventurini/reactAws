import React, {Component} from 'react';
import Status from "./Status";


class Login extends Component{

    state = {
      email: '',
      password:''
    }

    onChange = (key,value) =>{
        this.setState({[key]:value});
    }

    render() {
        return(
            <div className='container center_div'>
                <h1>L O G I N</h1>
                <form>
                    <div className='input-group mb-3'>
                        <span className="input-group-text">Email</span>
                        <input type="text" className='form-control' placeholder={'Email'} onChange={event => this.onChange('email',event.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input type="password" className='form-control' placeholder={'password'} onChange={event => this.onChange('password',event.target.value)}/>
                    </div>
                    <button className='btn btn-dark'>Sign Up</button>
                    <Status/>
                </form>

            </div>
        )
    }

}

export default Login;