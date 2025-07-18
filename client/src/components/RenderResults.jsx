import React from "react";
import { useFetchInfinite } from "../hooks/useFetch";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const getNextPage = (lastPage) => {
  const currentRound = parseInt(lastPage[0][0].intRound);
  const nextRound = currentRound - 1;
  return nextRound >= 1 ? nextRound : undefined;
};

const RenderResults = ({ round }) => {
  const { 
    data: results, 
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useFetchInfinite('/results', ['results', round], round, getNextPage);

  const lastItemRef = useIntersectionObserver(fetchNextPage, hasNextPage, isFetchingNextPage);

  if (isLoading) {
    return (
      <div className='flex justify-center mt-4'>
        <div 
          className='h-[0.2rem] bg-gradient-to-r from-pink-500 via-pink-500 to-orange-500 animate-loading' 
        />
      </div> 
    );
  }

  if (!results || !results.pages?.length) {
      return null;
  }

  return (
    <>
      {
        results?.pages?.map((group, groupIndex) => (
          <div key={`group-${groupIndex}`} className='w-full gap-4 animate-fade-in'>
            {
              group?.map((date, dateIndex) => (
                <div key={`date-${groupIndex}-${dateIndex}`} className='flex flex-col mt-2 gap-2'>
                  <h2 className='text-3xl font-semibold text-[rgb(233,0,82)] mx-auto mt-2 lg:pl-2 lg:mx-0'>
                    { 
                      new Date(
                        results.pages[groupIndex][dateIndex][0].dateEvent
                      ).toDateString() 
                    }
                  </h2>

                  {
                      date.map((result) => (
                          <div key={result.idEvent}>
                            <div className='text-xl font-medium p-2 rounded
                              grid grid-cols-1 gap-y-2 items-center justify-items-center
                              md:grid-cols-[1fr_2fr_1fr_2fr_1fr_2fr]
                              lg:grid-cols-[1fr_2fr_1fr_2fr_1fr_1fr_2fr]
                              md:text-base lg:text-lg xl:text-xl
                              hover:hover:bg-[linear-gradient(to_right,_rgb(8,_88,_209),_rgb(7,_224,_231))]
                              hover:hover:text-white'
                            >
                              <img 
                                className='w-12 md:w-9 lg:w-12' 
                                src={result.strHomeTeamBadge} 
                                alt={`${result.strHomeTeam}'s club badge`}
                              />
                              <span>{result.strHomeTeam}</span>
                              <img 
                                className='w-12 md:w-9 lg:w-12' 
                                src={result.strAwayTeamBadge} 
                                alt={`${result.strAwayTeam}'s club badge`}
                              />
                              <span>{result.strAwayTeam}</span>
                              <span className='font-normal'>
                                { Array.from(result.strTime).slice(0, 5) }
                              </span>
                              <img 
                                className='w-12 md:hidden lg:block' 
                                src='https://cdn4.iconfinder.com/data/icons/buildings-and-structures-3/512/sports___stadium_soccer_football_fitness_building.png' 
                                alt='Generic stadium'
                              />
                              <span className='font-normal md:text-sm lg:text-base'>
                                @ {result.strVenue}
                              </span>
                            </div>

                            <div className='h-0.5 w-[85%] mx-auto bg-slate-400 mt-2 lg:hidden' />
                          </div>
                      ))
                  }
                </div>
              ))
            }
            <div ref={lastItemRef} />
          </div>
        ))
      }
    </>
  );
};

export default RenderResults;