import React from 'react';
import Banner from '../Banner/Banner';
import { useTheUser } from '../hooks/loggedInuser/useTheUser';
import Tools from '../Tools/Tools';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
        </div>
    );
};

export default Home;