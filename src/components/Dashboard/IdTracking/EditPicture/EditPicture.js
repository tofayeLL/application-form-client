import React from 'react';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';

const EditPicture = () => {
    const { id } = useParams();
    const location = useLocation();
    const applicantData = location?.state?.applicantData;
    console.log("from edit picture", id, applicantData);


    return (
        <section>
            i am from edit picture page

        </section>
    );
};

export default EditPicture;