import React from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EditFullProfile = () => {
        const { id } = useParams();
        const location = useLocation();
        const applicantData = location?.state?.applicantData;
        console.log("from edit profile page", id, applicantData);
    return (
        <section>
            <h1>I am from edit full profile page</h1>
            
        </section>
    );
};

export default EditFullProfile;