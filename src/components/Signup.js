import React, {Component} from 'react';

class Signup extends Component{

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
                <h1>SIGN IN</h1>
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
                </form>

            </div>
        )
    }

}

export default Signup;