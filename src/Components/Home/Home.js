import React from 'react';
import Banner from '../Banner/Banner';
import { useTheUser } from '../hooks/loggedInuser/useTheUser';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';
import Tools from '../Tools/Tools';
import WorkWithUs from '../WorkWithUs/WorkWithUs';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Tools></Tools>
            <Reviews></Reviews>
            <WorkWithUs></WorkWithUs>
        </div>
    );
};

export default Home;