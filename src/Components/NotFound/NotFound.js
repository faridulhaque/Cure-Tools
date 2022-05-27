import React from 'react';
import error from '../assets/images/error.png'

const NotFound = () => {
    return (
        <div>
            <img style={{width: '100%', height: '100vh'}} src={error} alt="error"></img>
        </div>
    );
};

export default NotFound;