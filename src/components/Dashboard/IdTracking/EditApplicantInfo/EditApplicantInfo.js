import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EditApplicantInfo = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <h1>I am from editApplicant info{id}</h1>
            
        </div>
    );
};

export default EditApplicantInfo;