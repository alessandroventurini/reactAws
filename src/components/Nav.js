import React, {Component} from 'react';
import '../css/Nav.css'

class Nav extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand brand" href="/">PROVA</a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/signin">Sign In</a>
                            <a className="nav-item nav-link active" href="/login">Login</a>
                            <a className="nav-item nav-link active" href="/lambda">Test Lambda</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav;