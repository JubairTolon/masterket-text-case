import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Home.css'

const Home = () => {
    return (
        <div className='home__container flex w-full flex-col'>
            <Navbar />
            <Banner />
        </div>
    );
};

export default Home;