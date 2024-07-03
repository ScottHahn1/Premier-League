import { useEffect } from 'react';

const GetTeams = ({ setTeams }) => {

    useEffect(() => {
        fetch('https://premier-league-backend.vercel.app/teams')
        .then(response => response.json())
        .then(data => data.teams.map(item => {
            setTeams(prev => [...prev, {
                badge: item.strBadge,
                location: item.strStadiumLocation,
                jersey: item.strTeamJersey,
                name: item.strTeam,
                abbName: item.strTeamShort
            }])
        }))
    }, [])
};

export default GetTeams;