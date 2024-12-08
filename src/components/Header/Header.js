import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import './Header.css';
import { Toaster, toast } from 'react-hot-toast';
import bsri from '../../assets/images/bsri.png';
import govt_logo from '../../assets/images/govt_logo.png';
import { UserContext } from '../../contexts/UserProvider/UserProvider';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Header = () => {

    // const { user, logOut } = useAuth();
    const { userEmail, setUserEmail } = useContext(UserContext);
    const history = useHistory();




    const menuStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    const handleLogout = () => {
        setUserEmail(null); // Clears user email from context and localStorage
        // console.log("User logged out successfully");
        toast.success("User logged out successfully");
        history.push("/login3"); // Redirect to the login page

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
                        <tr height="45" style={{ backgroundColor: 'rgb(1, 129, 83)' }} >
                            <td className='border-r-[1px] border-green-950'><Link to="/home" style={menuStyle}>Home</Link></td>
                            <td className='border-r-[1px] border-green-950'>
                                {userEmail ? <button
                                    onClick={handleLogout}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Logout
                                </button>

                                    : <Link to="/login3" style={menuStyle}>Login</Link>}
                            </td>
                            <td className='border-r-[1px] border-green-950'><Link to="/payment" style={menuStyle}>Payment Status</Link></td>
                            <td className='border-r-[1px] border-green-950'><Link to="/instruction" style={menuStyle}>Instructions</Link></td>
                            <td className='border-r-[1px] border-green-950'><Link to="applicant" style={menuStyle}>Admit Card</Link></td>
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