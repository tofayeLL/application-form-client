import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Applicant = () => {
    const [applicants, setApplicants] = useState([]);
    const { user } = useAuth();
    // console.log(user.email);
    useEffect(() => {
        const url = `http://localhost:5000/applicantCollection?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setApplicants(data));
    }, [user.email]);
    const adminStyle = {
        backgroundColor: '#ddd',
        padding: '20px 20px 80px 20px',
        borderBottom: '2px solid #025c3b'
    };
    return (
        <div style={adminStyle}>
            {
                applicants.map(applicant => <h2 key={applicant._id} style={{ color: '#277BC0' }}>{applicant.applicantName} Info</h2>)
            }
            <table style={{ margin: '0 auto', border: '1px solid #025c3b', borderCollapse: 'collapse', textAlign: 'left' }} border="1px solid" cellSpacing="0" cellPadding="4">
                <tbody>
                    <tr style={{ fontWeight: 'bold' }}>
                        <td>SL</td>
                        <td>Phone Number</td>
                        <td>Name</td>
                        <td>Father's Name</td>
                        <td>Post Name</td>
                        <td>Application Form</td>
                    </tr>
                    {
                        applicants.map(applicant => <tr key={applicant._id}>
                            <td>{applicants.indexOf(applicant) + 1}</td>
                            <td>{applicant.p_number}</td>
                            <td>{applicant.applicantName}</td>
                            <td>{applicant.fname}</td>
                            <td>{applicant.postName}</td>
                            <td style={{ textAlign: 'center' }}><Link to={`/admitCard/${applicant._id}`} style={{ textDecoration: 'none' }}>Download Now</Link></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Applicant;