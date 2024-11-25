import SeasonNotStarted from "./SeasonNotStarted";

const RenderFixtures = ({ fixtures, teams, loading }) => {
    return (
        <>
            {
                loading === false ? 
                fixtures.map((fixtureGroup, index) =>
                    <div key={index} className='fixtures'>
                        <h1 id='fixture-date'>
                            { new Date(fixtures[index][0].dateEvent).toDateString() }
                        </h1>
                        { fixtures[index].map((item, index) => (
                            <div key={`${index} ${index += 1}`} className='fixtures-container'>
                                <p>
                                    {item.strHomeTeam}
                                </p>
                                { 
                                    teams.filter(team => team.name === item.strHomeTeam)
                                    .map(team => <img key={`${index} ${index += 3}`} className='home-badge' src={team.badge} /> ) 
                                }
                                <p> 
                                    { Array.from(item.strTime).slice(0, 5) } 
                                </p>
                                { 
                                    teams.filter(team => team.name === item.strAwayTeam)
                                    .map(team => <img key={`${index} ${index += 5}`} className='away-badge' src={team.badge} /> ) 
                                }
                                <p>
                                    {item.strAwayTeam}
                                </p>
                                <img 
                                    width='50px' 
                                    src='https://cdn4.iconfinder.com/data/icons/buildings-and-structures-3/512/sports___stadium_soccer_football_fitness_building.png' 
                                />
                                <p>
                                    {item.venue}
                                </p>
                            </div>
                        ))}
                    </div>
                ) 
                : 
                <div className='loading-container'>
                    <div className='loading'></div>
                </div>
            }

            { 
                loading === false && !fixtures && <SeasonNotStarted />
            }
        </>
    )
};

export default RenderFixtures;