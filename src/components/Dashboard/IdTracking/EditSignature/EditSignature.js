import React from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EditSignature = () => {


     const { id } = useParams();
        const location = useLocation();
        const applicantData = location?.state?.applicantData;
        console.log("from edit Signature", id, applicantData);
    



    return (
        <section>
            <h1>I am from edit signature page</h1>
            
        </section>
    );
};

export default EditSignature;