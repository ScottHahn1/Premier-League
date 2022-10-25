import { useEffect } from 'react';

const GetFixtures = ({ setFixtures, rounds }) => {

    useEffect(() => {
        rounds.map(item => {
            fetch(`https://www.thesportsdb.com/api/v1/json/2/eventsround.php?id=4328&r=${item}&s=2022-2023`)
            .then(response => response.json())
            .then(data => {
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
    }, [rounds]);
};
  
export default GetFixtures;