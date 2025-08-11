import React from 'react';
import { useFetch } from '../hooks/useFetch';

const HomeFixtures = () => {
    const { data: round, isLoading: roundLoading } = useFetch('/fixtures', ['homeFixturesRound']);

    const { data: fixtures, isLoading: fixturesLoading } = useFetch(`/fixtures/${round}`, ['homeFixtures', round], !!round);

    if (roundLoading || fixturesLoading || !round || !fixtures) {
        return null;
    }

    return (
        <div className=' text-center ml-2 mt-4 border-1 border-slate-400 rounded-lg'>
            <h2 className='rounded-tr-lg rounded-tl-lg bg-[linear-gradient(270deg,_rgb(255,40,130)_30%,_rgb(255,105,0))] text-white text-2xl font-medium'>
                Upcoming Fixtures
            </h2> 

            {
                fixtures.map((group, groupIndex) => (
                    <div key={groupIndex} className='text-center flex flex-col gap-2 mt-2'>
                        <h3 className='bg-[linear-gradient(270deg,_rgb(255,40,130)_30%,_rgb(255,105,0))] text-white'>{new Date(group[0].dateEvent).toDateString()}</h3>
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