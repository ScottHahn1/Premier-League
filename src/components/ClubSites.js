import React from 'react';
import { useState, useEffect } from 'react';

const ClubSites = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
        .then(response => response.json())
        .then(data => setTeams({logo: data.teams.map(team => team.strTeamBadge), website: data.teams.map(team => team.strWebsite)}))
    }, [])

    return (
        teams.logo ?
        <div className='club-sites'>
            <h4 id='club-sites-heading' style={{color: 'gray'}}>Club Sites &#8594;</h4> 
            {teams.logo.map((item, index) =>
             <a key={index} 
                href={ `//${teams.website[index]}` } 
                target="_blank"> 
                <img className='site-badges' 
                src={item} /> 
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