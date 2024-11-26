import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminRoute = () => {
    const [applicants, setApplicants] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/applicantCollection')
            .then(res => res.json())
            .then(data => setApplicants(data));
    }, []);
    const adminStyle = {
        backgroundColor: '#ddd',
        padding: '20px'
    };
    return (
        <div style={adminStyle}>
            <h2>All Applicant</h2>
            <table style={{ margin: '0 auto', border: '1px solid #025c3b', borderCollapse: 'collapse', textAlign: 'left' }} border="1px solid" cellSpacing="0" cellPadding="4">
                <tbody>
                    <tr style={{ fontWeight: 'bold' }}>
                        <td>SL</td>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Father's Name</td>
                        <td>Post Name</td>
                    </tr>
                    {
                        applicants.map(applicant => <tr key={applicant._id}>
                            <td>{applicants.indexOf(applicant) + 1}</td>
                            <td><Link to={`/admitCard/${applicant._id}`}>{applicant._id.slice(13)}</Link></td>
                            <td>{applicant.applicantName}</td>
                            <td>{applicant.fname}</td>
                            <td>{applicant.postName}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                applicants.map(app => <h2 key={app._id}>{app.applicantName}</h2>)
            }
        </div>
    );
};

export default AdminRoute;