import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
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
                <a id='footer-copyright' href='https://github.com/ScottHahn1' target='_blank' rel="noreferrer">Copyright &copy; 2024 Scott Hahn &nbsp;<FontAwesomeIcon icon={faGithub} size='2x' /> </a>
            </p>

            <div className='social-media'>
                <h2>Social Media</h2>
                <p> 
                    <a className='social-media-links' href='https://www.facebook.com/premierleague' target='_blank' rel="noreferrer"> PL on Facebook &nbsp; <FontAwesomeIcon icon={faFacebook} size='2x' /> </a> 
                </p>
                <p> 
                    <a className='social-media-links' href='https://twitter.com/premierleague' target='_blank' rel="noreferrer"> PL on Twitter &nbsp; <FontAwesomeIcon icon={faTwitter} size='2x' /> </a>
                </p>
                <p> 
                    <a className='social-media-links' href='https://www.youtube.com/premierleague' target='_blank' rel="noreferrer"> PL on Youtube &nbsp; <FontAwesomeIcon icon={faYoutube} size='2x' /> </a> 
                </p>
                <p> 
                    <a className='social-media-links' href='https://www.instagram.com/premierleague/' target='_blank' rel="noreferrer"> PL on Instagram &nbsp; <FontAwesomeIcon icon={faInstagram} size='2x' /> </a> 
                </p>
            </div>
        </footer>
    )
};

export default Footer;