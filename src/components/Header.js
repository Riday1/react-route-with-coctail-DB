import React from 'react';
import { NavLink } from 'react-router-dom';
import './common.css'
const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/coctails'>Coctails</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    );
};

export default Header;