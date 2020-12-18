import React, { useState, useContext } from 'react';
import { AccountContext } from './Accounts';
import Status from "./Status";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { authenticate } = useContext(AccountContext);

    const onSubmit = event => {
        event.preventDefault();
        authenticate(email, password)
            .then(data => {
                console.log('Logged in!', data);
            })
            .catch(err => {
                console.error('Failed to login!', err);
            })
    };

    return (
        <div className='container center_div'>
            <h1>LOGIN</h1>
            <form onSubmit={onSubmit}>
                <div className='input-group mb-3'>
                    <span className="input-group-text">Email</span>
                    <input type="text" className='form-control' value={email} onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input type="password" className='form-control' value={password} onChange={event => setPassword(event.target.value)}/>
                </div>
                <button type="submit" className='btn btn-dark'>Sign Up</button>
                <Status/>
            </form>

        </div>
    );
};