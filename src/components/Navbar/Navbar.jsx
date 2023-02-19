import React from 'react';
import './Navbar.css'
import { CiSearch } from 'react-icons/ci';
import { RiListSettingsLine } from 'react-icons/ri';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { FaUserAlt } from 'react-icons/fa';
import { VscBellDot } from 'react-icons/vsc';



const Navbar = () => {
    return (
        <nav className=''>
            <div className='text-center'>
                <h1 className='nav__head'>Headphone</h1>
                <p className='nav__head__info'>for the top brand</p>
            </div>
            <div className='nav__icon_container'>
                <div className='flex relative items-center'>
                    <span className='absolute text-2xl left-2'><CiSearch /></span>
                    <input className='search__input pl-10' type="text" name="" id="" placeholder='Search Product' />
                    <span className='absolute text-2xl right-2'><RiListSettingsLine /></span>
                </div>
                <span className='nav__icon__content'><SlEnvolopeLetter /></span>
                <span className='nav__icon__content'><VscBellDot /></span>
                <span className='nav__icon__content'><FaUserAlt /></span>
            </div>
        </nav>
    );
};

export default Navbar;