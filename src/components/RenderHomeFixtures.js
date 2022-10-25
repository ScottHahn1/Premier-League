import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Home.css';

const RenderHomeFixtures = ({sortByTime, teams, startingRound, loading, setLoading}) => {
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        sortByTime.length && startingRound.length && sortByTime.map((item, index) => {
            item[index] !== undefined && item[index].round === startingRound[startingRound.length - 1] && setFixtures(prev => [...prev, item[index]]);
        })
    }, [startingRound]);

    let newFixtures = fixtures.length && startingRound.length && 
    [
      ...new Set(fixtures.sort((a, b) => a.round - b.round)
      .filter(item => item.round === startingRound[startingRound.length - 1]))
    ];

    useEffect(() => {
      teams.length && setLoading(false)
    });


    return (
      loading === false ?
      newFixtures.length > 0 && 
      sortByTime.length && newFixtures.map((item, index) =>
          <div key={`${index} ${index + 1}`} className='home-fixtures'>

              <h3 id='home-fixture-date'>{sortByTime[index][0].date.toDateString()}</h3>
              { sortByTime[index].map(item => (
                  <div key={`${index} ${index++}`} className='home-fixtures-container'>

                      { teams.filter(team => team.name === item.homeTeam)
                        .map(team => team.abbName === null ? <p key={`${index}0`}>
                        { item.homeTeam.slice(0, 3).toUpperCase() }</p> : <p key={`${index}`}>{ team.abbName }</p>)}

                      { teams.filter(team => team.name === item.homeTeam)
                        .map(team => <img key={`${index}1`} width='40px' height='40px' src={team.badge} /> ) 
                      }

                      <p key={`${index}2`}> { Array.from(item.time).slice(0, 5) } </p>

                      { teams.filter(team => team.name === item.awayTeam)
                        .map(team => <img key={`${index}3`} width='40px' height='40px' src={team.badge} /> ) }

                      { teams.filter(team => team.name === item.awayTeam)
                        .map(team => team.abbName === null ? <p key={`${index}4`}>
                        { item.awayTeam.slice(0, 3).toUpperCase() }</p> : <p key={`${index}4`}>{ team.abbName }</p>)}

                  </div>
              ))}
          </div>
      )
      :
      null
    )
};

export default RenderHomeFixtures;