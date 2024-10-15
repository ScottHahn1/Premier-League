import React from 'react';
import '../styles/Reporting.css';

const Reporting = () => {

    return (
        <div>
            <div className='report-heading'>
                <h1>Report Racism</h1>
            </div>

            <div className='report'>
                <p>Racism in any form will not be tolerated by the Premier League and our clubs and we encourage supporters to continue to play their part in this by reporting it.</p>
                <br></br>
                <h2>Reporting at a match</h2> 
                <p>If you witness racist or other discriminatory behaviour at a match or around a stadium, please report it to the nearest steward or police officer.</p>
                <br></br>
                <h2>How to report abuse on social media</h2>
                <p>
                    If you see a post on social media you believe is discriminatory, you can report it to the site or platform where it was posted. 
                    They have people who will review your report and decide on taking it down.
                </p>
                <br></br>
                <p>Click on the relevant links below for how to report for each platform</p>
            
                <div className='social-media-links'>
                    <a href='https://help.twitter.com/en/rules-and-policies/twitter-report-violation' target='_blank' rel='noreferrer'> <h4>Twitter |</h4> </a> &nbsp;
                    <a href='https://www.facebook.com/help/263149623790594/' target='_blank' rel='noreferrer'> <h4>Facebook |</h4></a> &nbsp;
                    <a href='https://help.instagram.com/372161259539444' target='_blank' rel='noreferrer'> <h4>Instagram</h4> </a>
                </div>
                <div className='social-media-links'>
                    <a href='https://support.google.com/youtube/answer/2802027' target='_blank' rel='noreferrer'> <h4>Youtube |</h4> </a> &nbsp;
                    <a href='https://support.tiktok.com/en' target='_blank ' rel='noreferrer'> <h4>TikTok |</h4> </a> &nbsp;
                    <a href='https://www.snap.com/en-US/safety/safety-reporting' target='_blank' rel='noreferrer'> <h4>Snapchat</h4> </a>
                </div>

                <p>Below are simple guides as to how to report an abusive post on Instagram, Facebook and Twitter.</p>
                <br></br>

                <img className='report-images' src='https://resources.premierleague.com/photos/2021/04/15/5017be38-b458-4db5-90cb-707d2b45bcc3/PL_NRFR_REPORT_INSTA_16x9_V2.jpg?width=1350&height=759' alt='Report racism - Instagram' />
                <br></br> <br></br> <br></br>
                <img className='report-images' src='https://resources.premierleague.com/photos/2021/04/15/e1e8e0fa-1760-4dd5-87d8-5ee5cd3eca85/PL_NRFR_REPORT_FACEBOOK_16x9_V2.jpg?width=1350&height=759' alt='Report racism - Facebook' />
                <br></br> <br></br> <br></br>
                <img className='report-images' src='https://resources.premierleague.com/photos/2021/04/15/36473bd9-164d-4df8-a859-83e40427bd29/PL_NRFR_REPORT_TWITTER_16x9_V2.jpg?width=1350&height=759' alt='Report racism Twitter' />
                <br></br> <br></br> <br></br>

            </div>
        </div>
    )
};

export default Reporting;