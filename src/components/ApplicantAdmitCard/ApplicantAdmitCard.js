import React from 'react';
import useIndividualUserData from '../../hooks/useIndividualUserData';

const ApplicantAdmitCard = () => {
    const { userData } = useIndividualUserData();

    
    return (
        <section>
            <p>I am from applicant page</p>
            
        </section>
    );
};

export default ApplicantAdmitCard;