import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Campaign.css';

const Campaign = () => {
    
  return (
    <>
        <div className='campaign-heading'>
            <h1 id='h1'>No Room <br></br> For Racism</h1>
        </div> 
        
        <div className='campaign-container'>
         
          <div className='video-container'>
          <h4>
            There is No Room For Racism. Anywhere. <br></br>
            Not online, not in the stands, not at home and not on the streets. <br></br>
            We all must come together as fans, as players and as clubs to combat discrimination wherever it exists in society.
          </h4>
            <iframe id='video' title="vimeo-player" src={`https://youtube.com/embed/DhKTndooD-k?autoplay=0`} width="650" height="600" allowFullScreen></iframe>
            <p>Through No Room For Racism, the Premier League and its clubs work with fans, the FA, EFL, PFA, Kick It Out and the police to tackle racism on and off the pitch, promoting equality, diversity and inclusion across all areas of football.</p>
            <p>Together we can all do more to make a positive impact.</p>
            <p>So, if you see discrimination, challenge it, report it, change it.</p>
          </div>

          <div className='promo'>
            <div className='info'>
              <h2 id='h2'>No Room For Racism Action Plan</h2>
              <p>The Premier League and clubs are committed to promoting equality, diversity and inclusion in football.</p>
              <br></br>
              <Link className='find-out-more' to='/action-plan'>Find out more &#8594;</Link>
            </div>

            <div className='banner'>
            </div>

            <img src='https://resources.premierleague.com/photos/2021/10/07/46f0aa45-3484-4cdb-96f2-92cae1277994/NRFR-sleeve-badge-B-W.jpg?width=600&height=333' alt='Action plan' />
          </div>

          <br></br>

          <div className='promo'>
            <div className='info'>
              <h2 id='h2'>Reporting racism</h2>
              <p>To take a stand against racism, we all need to make a positive change. If you see or hear racism, here is how to call it out.</p>
              <br></br>
              <Link className='find-out-more' to='/reportracism'>Find out more &#8594;</Link>
            </div>

            <div className='banner'>
            </div>

            <img src='https://resources.premierleague.com/photos/2020/10/15/c1ae4019-04c1-4f61-b3b9-a8b81b87401a/Reporting-abuse-Fan-on-phone-v2-cropped-B-W.jpg?width=600&height=333' alt='Reporting racism' />
          </div>

        </div>

    </>
  )
};

export default Campaign;