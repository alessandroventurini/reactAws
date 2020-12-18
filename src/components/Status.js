import React, {useState, useContext, useEffect} from 'react';
import {AccountContext} from "./Accounts";


export default () =>{

    const [status,setStatus] = useState(false);
    const {getSession,logout} = useContext(AccountContext);

    useEffect(() =>{
        getSession()
            .then(session =>{
                console.log('Session: ',session);
                setStatus(true);
            })

    },[]);

    return(
        <div>
            {status ? (
                <button onClick={logout} className='btn btn-dark status' >Logout</button>
            ) : (
                <div className="alert alert-warning warning" role="alert">
                    Please login.
                </div>
            )}
        </div>
    );
};