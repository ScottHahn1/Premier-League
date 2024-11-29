import React from 'react';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const ClubSites = () => {
    const [teams, setTeams] = useState([]);

    const { data } = useFetch('teams');

    useEffect(() => {
        if (data) {
            setTeams({ 
                logo: data.teams.map(team => team.strBadge), 
                website: data.teams.map(team => team.strWebsite) 
            });
        }
    }, [data])

    return (
        teams.logo ?
        <div className='club-sites'>
            <h4 id='club-sites-heading' style={{color: 'gray'}}>Club Sites &#8594;</h4> 
            {teams.logo.map((logo, index) =>
             <a 
                key={index}
                rel="noreferrer" 
                href={ `//${teams.website[index]}` } 
                target="_blank">
                <img className='site-badges' src={logo} alt={`${logo} logo`} /> 
             </a>)
            }
        </div>
        :
        <div className='loading-container'>
            <div className='loading'></div>
        </div> 
    )
};

export default ClubSites;