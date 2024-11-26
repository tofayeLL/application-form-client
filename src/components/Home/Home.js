import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const homeStyle = {
        backgroundColor: '#ddd',
        padding: '80px'
    };
    const homeLinkStyle = {
        textDecoration: 'none',
        color: '#0000ff',
        fontWeight: ' bold'
    }
    const downloadIcon = <FontAwesomeIcon icon={faFileDownload} />
    const pdfIcon = <FontAwesomeIcon icon={faFileAlt} />
    return (
        <div >
            <div style={homeStyle}>
                {/* <h2>This is Home</h2> */}
                {/* <Link to='/users/add'>Form</Link> */}
                <fieldset style={{ border: '1px dashed rgb(40, 40, 40)', textAlign: 'left', padding: '40px' }}>
                    <legend><mark>Online and SMS based Recuitment System</mark></legend>
                    <Link to="adevertisement" style={homeLinkStyle}> {downloadIcon} Advertisement (Click here to download)</Link> <br /> <br />
                    <Link to="/applicationForm" style={homeLinkStyle}>{pdfIcon} Application Form (Click here to apply online)</Link>
                </fieldset>
            </div>
            <footer style={{ backgroundColor: 'rgb(144, 238, 144)', padding: '5px 0px 6px', fontStyle: 'italic', fontWeight: ' bold' }}><small>For any inconvenience, please email send to example@gmail.com.bd</small></footer>
        </div>
    );
};

export default Home;