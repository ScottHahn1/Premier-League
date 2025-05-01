import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const GetTeams = ({ setTeams }) => {
    const { data } = useFetch('/teams', 'teams');

    useEffect(() => {
        if (data) {
            const teams = data.teams.map(team => ({
                badge: team.strBadge,
                location: team.strStadiumLocation,
                jersey: team.strTeamJersey,
                name: team.strTeam,
                abbName: team.strTeamShort
            }))

            setTeams(teams);
        }
    }, [data])
};

export default GetTeams;