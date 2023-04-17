import React, { useContext } from 'react';
import './Header.css';
import logo from  '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(result => {})
        .catch(error => console.error(error))
    }
    return (
        <nav className='header'>

            <img src={logo} alt="" />
            <div>
                <Link to="/">shop</Link>
                <Link to="/orders">order</Link>
                <Link to="/inventory">inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {user && <span className='text-white'>Welcome {user.email} <button onClick={handleLogOut}>Log out</button></span>}
            </div>
        </nav>
    );
};

export default Header;