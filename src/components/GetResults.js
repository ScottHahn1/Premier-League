import { useEffect } from 'react';

const GetResults = ({ setResults, rounds }) => {
    useEffect(() => {
        rounds.map(round => {
            fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${round}&s=2023-2024`)
            .then(response => response.json())
            .then(data => {
                data.events.map(event => {
                    setResults(prev => [...prev, {
                        homeTeam: event.strHomeTeam,
                        awayTeam: event.strAwayTeam,
                        homeTeamBadge: event.strHomeTeamBadge,
                        awayTeamBadge: event.strAwayTeamBadge,
                        homeScore: event.intHomeScore,
                        awayScore: event.intAwayScore,
                        date: new Date(event.dateEvent),
                        venue: event.strVenue === 'The American Express Community Stadium' ? 'Amex Stadium' : event.strVenue,
                        homeTeamId: event.idHomeTeam,
                        awayTeamId: event.idAwayTeam,
                        time: event.strTime,
                        round: parseInt(event.intRound),
                        id: event.idEvent
                    }]);
                });
            });
        });
    }, []);
};

export default GetResults;