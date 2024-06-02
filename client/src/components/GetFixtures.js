import { useEffect } from 'react';

const GetFixtures = ({ setFixtures, rounds, setGotAllData }) => {

    useEffect(() => {
        rounds.map(round => {
            fetch(`https://premier-league-backend.vercel.app/games/fixtures/${round}`)
            .then(response => response.json())
            .then(data => {
                round === 38 && setGotAllData(true);
                data.events.map(item => {
                    setFixtures(prev => [...prev, {
                        homeTeam: item.strHomeTeam,
                        awayTeam: item.strAwayTeam,
                        date: new Date(item.dateEvent),
                        venue: item.strVenue, 
                        homeTeamId: item.idHomeTeam,
                        awayTeamId: item.idAwayTeam,
                        time: item.strTime,
                        round: parseInt(item.intRound),
                        id: item.idEvent
                    }]);
                });
            });
        });
    }, []);
};
  
export default GetFixtures;