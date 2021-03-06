import React, {Component} from 'react';
import {FaUsers} from 'react-icons/fa'
import { Link } from '@reach/router';


class Navigation extends Component {

  render() {

    const {user, logOutUser} = this.props;

    return (
        <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <FaUsers /> Meeting Log
                </Link>
                <div className="navbar-nav ml-auto">
                    {user && (
                        <Link className="nav-item nav-link" to="/meetings">
                            Meetings
                        </Link>
                    )}

                    { !user && (
                        <Link className="nav-item nav-link" to="/login">
                            LOG IN
                        </Link>
                    )}
                    
                    { !user && (
                        <Link className="nav-item nav-link" to="/register">
                            Register
                        </Link>
                    )}
                    
                    {user && (
                        <Link className="nav-item nav-link" to="/login" onClick={e => logOutUser(e)}>
                            Log out
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
  }
  
}

export default Navigation;
