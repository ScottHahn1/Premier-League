import { useEffect } from 'react';

const GetResults = ({ setResults, rounds, setGotAllData }) => {
    useEffect(() => {
        rounds.map(round => {
            fetch(`https://premier-league-backend.vercel.app/games/results/${round}`)
            .then(response => response.json())
            .then(data => {
                round === 38 && setGotAllData(true);
                data.events && (
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
                    })
                )
            })
        });
    }, []);
};

export default GetResults;