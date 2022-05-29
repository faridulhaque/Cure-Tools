import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <ScaleLoader color={"red"} size={100} />
        </div>
    );
};

export default Loading;