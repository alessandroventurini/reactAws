import React, { useState } from 'react';
import UserPool from '../UserPool';

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) console.error(err);
            console.log(data);
        });
    };

    return (
        <div className='container center_div'>
            <h1>SIGNIN</h1>
            <form onSubmit={onSubmit}>
                <div className='input-group mb-3'>
                    <span className="input-group-text">Email</span>
                    <input type="text" className='form-control' value={email} onChange={event => setEmail(event.target.value)}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Password</span>
                    <input type="password" className='form-control' value={password} onChange={event => setPassword(event.target.value)}/>
                </div>
                <button type="submit" className='btn btn-dark'>Sign In</button>
            </form>
        </div>
    );
};
