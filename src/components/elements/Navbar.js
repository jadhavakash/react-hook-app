import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link to ="/" style={{color:"#fff"}}>Contact Book</Link>
                    <div>
                        <Link to="/tempindex" className="btn btn-light mr-3">Brad App</Link>
                        <Link to="/newsindex" className="btn btn-light mr-3">News App</Link>
                        <Link to="/foodindex" className="btn btn-light mr-3">Food App</Link>
                        <Link to="/contacts/add" className="btn btn-light ml-auto">Create Contact</Link>
                        <Link to="/contactus" className="btn btn-light ml-3">Contact Us</Link>
                        <Link to="/auth" className="btn btn-light ml-3">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
