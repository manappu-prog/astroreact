import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../resources/Images/logoguruji.png'
import Name from '../../resources/Images/Gurji.png'
import Profile from '../../resources/Images/profilepic.png'
import Provider from '../../resources/Images/provider.png'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='logo-name'>
                    <img className='logo' src={Logo}></img>
                    <img className='name' src={Name}></img>
                </div>
                <ul className='list-items'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Call with Astrologer</Link></li>
                    <li><Link to='/'>Live(Comming Soon)</Link></li>
                </ul>
                <div className='profile-pic'>
                    <img className='profile' src={Profile}></img>
                </div>
            </nav>
            <section className='astro-para'>
                <p className='para-head'>"Astrology for clarity"</p>
                <p className='para-content'>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy</p>
                <button>Consult Now</button>
            </section>
            <section className='provider'>
                <img src={Provider}></img>
            </section>
        </div>
    )
}

export default Header;