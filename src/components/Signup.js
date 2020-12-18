import React, {Component} from 'react';
import UserPool from "../UserPool";


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
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.email} onChange={event => this.setState({ email : event.target.value})}/>
                    <input type="password" value={this.state.password} onChange={event => this.setState({ password : event.target.value})}/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;
