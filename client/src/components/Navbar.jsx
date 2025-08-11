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

       <div className='bg-darkpurple flex justify-around items-center md:h-24'>
        {!isShown &&
          <div className='relative flex px-4 flex-col text-center justify-end md:px-0 md:bg-white md:h-full'>
            <Link to='/'> 
              <img className='hidden absolute w-32 -top-4 md:block' src={PremierLeagueLogo} alt='Premier League logo' /> 
            </Link>
            <span className='text-lg font-semibold text-pink-500 md:text-base'>Premier League</span>
          </div>
        }

        <div className='text-white flex flex-col w-full py-2 text-center items-center md:hidden' onClick={() => setIsShown(!isShown)}>
          <div className='flex flex-col gap-1 w-8'>
            <div className='w-full h-1 bg-white' />
            <div className='w-full h-1 bg-white' />
            <div className='w-full h-1 bg-white' />
            <div className='w-full h-1 bg-white' />
          </div>

          {isShown &&
            <div className=' mt-4 text-lg w-full'>
              <Link to='/'>
                <div className='border-b-2 border-pink-600'>
                  <span>Home</span>
                </div>
              </Link>

              <Link to='/fixtures'>
                <div className='border-b-2 border-pink-600'>
                  <span>Fixtures</span>
                </div>
              </Link>

              <Link to='/results'>
                <div className='border-b-2 border-pink-600'>
                  <span>Results</span>
                </div>
              </Link>

              <Link to='/table'>
                <div>
                  <span>Table</span>
                </div>
              </Link>
            </div>
          }
        </div>

        <div className='hidden flex w-full justify-around items-center text-white text-lg font-medium md:block'>
          {/*<div className='absolute left-2 bg-lime-400 h-full w-2'></div>*/}
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