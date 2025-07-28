import React from 'react';
import { useFetch } from '../hooks/useFetch';

const HomeFixtures = () => {
    const { data: round, isLoading: roundLoading } = useFetch('/fixtures', ['homeFixturesRound']);

    const { data: fixtures, isLoading: fixturesLoading } = useFetch(`/fixtures/${round}`, ['homeFixtures', round], !!round);

    if (roundLoading || fixturesLoading || !round || !fixtures) {
        return null;
    }

    return (
        <div className='bg-black text-white text-center ml-2'>
            <h1 className='text-pink-600 text-2xl font-medium'>
                Upcoming Fixtures
            </h1> 

            {
                fixtures.map((group, groupIndex) => (
                    <div key={groupIndex} className='text-center flex flex-col gap-2 mt-2'>
                        <h2>{new Date(group[0].dateEvent).toDateString()}</h2>
                        {
                            group.map(fixture => (
                                <div key={fixture.idEvent} className='grid grid-cols-5 gap-1 items-center'>
                                    <span>{fixture.strAbbHomeTeam}</span>
                                    <img 
                                        className='w-8 lg:w-12' 
                                        src={fixture.strHomeTeamBadge} 
                                        alt={`${fixture.strHomeTeam}'s club badge`}
                                    />
                                    <span>
                                        { Array.from(fixture.strTime).slice(0, 5) }
                                    </span>
                                    <img 
                                        className='w-8 lg:w-12' 
                                        src={fixture.strAwayTeamBadge} 
                                        alt={`${fixture.strAwayTeam}'s club badge`}
                                    />
                                    <span>{fixture.strAbbAwayTeam}</span>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default HomeFixtures;