import React from 'react';
import './Banner.css';
import banner from '../assets/images/ctbanner.png'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div>
            <img className='banner-img' style={{width: '100%', height: '600px'}}  src={banner} alt="doctor and tools"/>
            <div className='banner-text'>
                <h1>Serving you since 2002</h1>
                <p>We have been providing medical equipments all over the state for twenty years!</p>
                <button onClick={()=> navigate('/register')}  className="banner-button">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;