import { useEffect } from 'react';

const GetResults = ({ setResults, rounds }) => {
    
    useEffect(() => {
        rounds.map(item => {
            fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${item}&s=2023-2024`)
            .then(response => response.json())
            .then(data => {
                data.events.map(item => {
                    setResults(prev => [...prev, {
                        homeTeam: item.strHomeTeam,
                        awayTeam: item.strAwayTeam,
                        homeTeamBadge: item.strHomeTeamBadge,
                        awayTeamBadge: item.strAwayTeamBadge,
                        homeScore: item.intHomeScore,
                        awayScore: item.intAwayScore,
                        date: new Date(item.dateEvent),
                        venue: item.strVenue === 'The American Express Community Stadium' ? 'Amex Stadium' : item.strVenue,
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

export default GetResults;