import React from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const AdmitCard = () => {

    const { id } = useParams();
    const location = useLocation();
    const applicantData = location?.state?.applicantData;
    console.log("from Admit Card", id, applicantData);


    return (
        <section>
            <h1>Admit Card page</h1>

        </section>
    );
};

export default AdmitCard;