import React from 'react';
import { useFetch } from '../hooks/useFetch';

const ClubSites = () => {
    const { data: clubs, isLoading, isError } = useFetch('/teams', ['clubSites'], true, Infinity);

    if (isError) {
        return null;
    }

    if (isLoading) {
        return (
            <div className='flex justify-center mt-4'>
                <div 
                  className='h-[0.2rem] bg-gradient-to-r from-pink-500 via-pink-500 to-orange-500 animate-loading' 
                />
            </div>          
        ) 
    }

    if (!clubs || clubs.length === 0) {
        return null;
    };

    return (
        <>
            <div className='flex items-center justify-center lg:gap-2 xl:gap-4'>
                <span className='text-gray-500 xl:text-lg'>Club Sites &#8594;</span> 
                {
                    <div className='flex py-1 gap-1 lg:gap-3 xl:gap-4'>
                        {
                            clubs.map(club =>
                                <a 
                                    key={club.idTeam}
                                    rel='noreferrer'
                                    href={`//${club.strWebsite}`}
                                    target='_blank'>
                                    <img className='w-8 h-8 xl:w-9 h-9' src={club.strBadge} alt={`${club.strTeam}'s logo`} /> 
                                </a>
                            )
                        }
                    </div>
                }
            </div>
        </>
    );
};

export default ClubSites;