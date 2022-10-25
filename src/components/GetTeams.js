import { useEffect } from 'react';

const GetTeams = ({ setTeams }) => {

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')
        .then(response => response.json())
        .then(data => data.teams.map(item => {
            setTeams(prev => [...prev, {
                badge: item.strTeamBadge,
                location: item.strStadiumLocation,
                jersey: item.strTeamJersey,
                name: item.strTeam,
                abbName: item.strTeamShort
            }])
        }))
    }, [])
};

export default GetTeams;