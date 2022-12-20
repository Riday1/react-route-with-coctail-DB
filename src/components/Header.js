import React from 'react';
import { Link } from 'react-router-dom';
import './common.css'
const Header = () => {
    return (
        <div className='header'>
            <Link  to='/home'>Home</Link>
            <Link to='/coctails'>Coctails</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;