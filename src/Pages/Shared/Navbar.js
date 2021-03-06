import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    let userError;
    if(error){
        userError=<p className='text-red-500'>{error?.message}</p>
        alert({userError});
    }
    const logout = () => {
        signOut(auth);
      };
      
    return (
        <div style={{marginLeft:"15%",marginBottom:"5%"}} className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        {/* <li tabIndex="0">
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li> */}
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/appoinment'>Appoinment</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                        <li>{user ? <button onClick={logout} class="btn btn-ghost">Sign Out</button>:<Link to='/login'>Login</Link>}</li>
                    </ul>
                </div>
                < Link to='/home' className="btn btn-link text-black hover:no-underline normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    {/* <li tabIndex="0">
                        <a>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li> */}

                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/appoinment'>Appoinment</Link></li>
                    <li><Link to='/reviews'>Reviews</Link></li>
                    <li><Link to='/contact'>Contact us</Link></li>
                    <li>{user ? <button onClick={logout} class="btn btn-ghost">Sign Out</button>:<Link to='/login'>Login</Link>}</li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Get started</a>
            </div> */}
        </div>
    );
};

export default Navbar;