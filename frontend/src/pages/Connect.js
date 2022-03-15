import React from 'react';
import Log from '../components/log';
import Navbar from '../components/Navbar';

const Connect = () => {
    return (
        <div className='connect-page'>
            <div className="log-contain">
                <Navbar />
                <Log />
            </div>
        </div>
    );
};

export default Connect;