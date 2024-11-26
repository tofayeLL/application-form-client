import React from 'react';
import circular from './media/vumi_montronaloy.pdf'

const Advertisement = () => {
    return (
        <div style={{ width: '100%' }}>
            <embed src={circular} style={{ width: '100%', height: '100vh' }}></embed>
        </div>
    );
};

export default Advertisement;