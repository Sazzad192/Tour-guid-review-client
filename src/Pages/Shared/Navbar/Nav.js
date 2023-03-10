import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../pic/logo.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Nav = () => {

    const {user, logOut} = useContext(AuthContext);

    const logoutbtn = () =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });          
    }

    const navItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        {
            user?.uid ?  <li><Link to={'/addService'}>Add-Service</Link></li> :
            <li></li>
        }
        {
           user?.uid ? <li><Link to={'/review'}>My-Review</Link></li> : <li></li>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link><img className='sm:w-16 h-16 ml-1 lg:w-20 h-20' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <Link onClick={logoutbtn} to={'/login'} className="btn"><p>Logout</p></Link> :
                    <Link to={'/login'} className="btn"><p >Login</p></Link>
                }
            </div>
        </div>
    );
};

export default Nav;