import React, {Component} from 'react';
import UserPool from "../UserPool";
import '../css/Signup.css';


class Signup extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = event =>{
        event.preventDefault();
        UserPool.signUp(this.state.email,this.state.password,[],null,(err,data) =>{
            if(err) console.error(err);
            console.log(data);
        })
    };

    render()
    {
        return (
            <div className='container center_div'>
                <h1>SIGNUP</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='input-group mb-3'>
                        <span className="input-group-text">Email</span>
                        <input type="text" className='form-control' value={this.state.email} onChange={event => this.setState({ email : event.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input type="password" className='form-control' value={this.state.password} onChange={event => this.setState({ password : event.target.value})}/>
                    </div>
                    <button type="submit" className='btn btn-dark'>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;
