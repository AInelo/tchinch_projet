import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return ( 
    <nav className='lg:font-serif lg:p-2  lg:flex lg:flex-row lg:justify-around sm:hidden'>
      
      <div className='navDiv'>
        <Link to='/' className='navLink'>Accueil</Link>
        <Link to='/projets' className='navLink'>Projets</Link>
        <Link to='/temoignages' className='navLink'>Témoignages</Link>
      </div>
      <div className='navDiv'>
        <span className='pt-2'>Contact Us:+229(91 64 18 20)</span>
        <Link to='/contact' className='contact-btn'>Contact</Link>
      </div>

    </nav>
  )
}

export default Header