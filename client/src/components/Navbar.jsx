import React from 'react';
import { useState } from 'react';
import PremierLeagueLogo from '../assets/PremierLeagueLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ClubSites from './ClubSites';

export const Navbar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <ClubSites />
      <div className='navbar poppins'>
          <div className='logo-container'>
            <Link to='/'> <img className='pl-logo' src={PremierLeagueLogo} alt='Premier League logo' /> </Link>
            <h2 id='logo-title'>Premier League</h2>
          </div>

            <section className='menu' onClick={() => setIsShown(!isShown)}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

              { isShown &&
                  <div className='menu-list'>
                    <Link to='/'>
                      <div>
                        <p>Home</p>
                      </div>
                    </Link>

                    <Link to='/fixtures'>
                      <div>
                        <p>Fixtures</p>
                      </div>
                    </Link>

                    <Link to='/results'>
                      <div>
                        <p>Results</p>
                      </div>
                    </Link>

                    <Link to='/table'>
                      <div>
                        <p>Table</p>
                      </div>
                    </Link>

                  </div>
              }
            </section>

          <div className='nav-btn-container'>
            <div className='ellipses'></div>
              <Link to='/'>Home</Link>
              <Link to='/fixtures'>Fixtures</Link>
              <Link to='/results'>Results</Link>
              <Link to='/table'>Table</Link>
              <Link to='/campaign'>No Room For Racism</Link>
          </div>
      </div>
    </>
  )
};

export default Navbar;