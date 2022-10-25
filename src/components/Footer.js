import React from 'react';
import '../styles/Footer.css';
import {FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='navigation'>
                <h2>Navigation</h2>
                <Link className='social-media-links' to='/'> <p>Home</p> </Link>
                <Link className='social-media-links' to='/fixtures'> <p>Fixtures</p> </Link>
                <Link className='social-media-links' to='/results'> <p>Results</p> </Link>
                <Link className='social-media-links' to='/table'> <p>Table</p> </Link>
            </div>

            <p id='copyright'>
                <a href='https://github.com/ScottHahn1' target='_blank'>Copyright &copy; 2022 Scott Hahn &nbsp;<FaGithub size='1.2em' /> </a>
            </p>

            <div className='social-media'>
                <h2>Social Media</h2>
                <p> 
                    <a className='social-media-links' href='https://www.facebook.com/premierleague' target='_blank'> PL on Facebook &nbsp; <FaFacebookF size='1.2em' /> </a> 
                </p>
                <p> 
                    <a className='social-media-links' href='https://twitter.com/premierleague' target='_blank'> PL on Twitter &nbsp; <FaTwitter size='1.2em' /> </a>
                </p>
                <p> 
                    <a className='social-media-links' href='https://www.youtube.com/premierleague' target='_blank'> PL on Youtube &nbsp; <FaYoutube size='1.2em' /> </a> 
                </p>
                <p> 
                    <a className='social-media-links' href='https://www.instagram.com/premierleague/' target='_blank'> PL on Instagram &nbsp; <FaInstagram size='1.2em' /> </a> 
                </p>
            </div>
        </footer>
    )
};

export default Footer;