import React from 'react';
import Banner from '../Banner/Banner';
import { useTheUser } from '../hooks/loggedInuser/useTheUser';
import Reviews from '../Reviews/Reviews';
import Tools from '../Tools/Tools';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;