import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import bsri from './images/bsri.png';
import govt_logo from './images/govt_logo.png';

const Header = () => {

    const { user, logOut } = useAuth();


    const menuStyle = {
        textDecoration: 'none',
        color: 'white'
    }
    return (
        <div className="header">
            <div className='menuTable'>
                <table border-cellspacing="0" cellPadding="10">
                    <tbody>
                        {/* <tr cellPadding='0' style={{ backgroundColor: '#dfdfdf' }}>
                            <td colSpan='3' cellPadding='0'></td>
                        </tr> */}
                        <tr>
                            <td><img src={govt_logo} alt='govt logo' /></td>
                            <td>Government of the People's Republic of Bangladesh <br /> <small>Ministry of
                                Agriculture </small> <br /> <span>Bangladesh
                                    Sugercrop
                                    Research Institute</span> <br /> <small>Ishurdi-6620, Pabna</small> </td>
                            <td><img src={bsri} alt='bsri' /></td>
                        </tr>
                    </tbody>
                </table>
                <table border='2' bordercolor='#025c3b' cellPadding='4' id='menu'>
                    <tbody>
                        <tr height="45" style={{ backgroundColor: 'rgb(1, 129, 83)' }}>
                            <td><Link to="/home" style={menuStyle}>Home</Link></td>
                            <td>
                                {user?.email ? <button onClick={logOut}>Logout</button>
                                    : <Link to="/login3" style={menuStyle}>Login</Link>}
                            </td>
                            <td><Link to="/payment" style={menuStyle}>Payment Status</Link></td>
                            <td><Link to="/instruction" style={menuStyle}>Instructions</Link></td>
                            <td><Link to="applicant" style={menuStyle}>Admit Card</Link></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {/* <nav>

                <Link to="/users">Users</Link>
                <Link to="/users/add">Add User</Link>
            </nav> */}
        </div>
    );
};

export default Header;