import React from 'react';
import '../styles/Home.css';

const RenderHomeFixtures = ({ fixtures, teams, loading }) => {
    return (
      loading === false &&
      fixtures.slice(0, 3).map((fixtureGroup, index) =>
        <div key={fixtureGroup[0].idEvent} className='home-fixtures'>
          <h3 id='home-fixture-date'>
            { new Date(fixtures[index][0].dateEvent).toDateString() }
          </h3>

          {fixtures[index].map(fixture => (
            <div key={fixture.idEvent} className='home-fixtures-container'>
                {
                  teams.filter(team => team.name === fixture.strHomeTeam)
                  .map(team => team.abbName === null ? 
                    <p key={`${fixture.idEvent}-home-abb`}>{ fixture.strHomeTeam.slice(0, 3).toUpperCase() }</p> : 
                    <p key={`${fixture.idEvent}-home-abb`}>{ team.abbName }</p>
                  )
                }

                {
                  teams.filter(team => team.name === fixture.strHomeTeam)
                  .map(team => <img key={`${fixture.idEvent}-home-badge`} width='40px' height='40px' src={team.badge} alt={`${team.name}'s badge`} />) 
                }

                <p> 
                  { Array.from(fixture.strTime).slice(0, 5) } 
                </p>

                {
                  teams.filter(team => team.name === fixture.strAwayTeam)
                  .map(team => <img key={`${fixture.idEvent}-away-badge`} width='40px' height='40px' src={team.badge} alt={`${team.name}'s badge`} />) 
                }

                {
                  teams.filter(team => team.name === fixture.strAwayTeam)
                  .map(team => team.abbName === null ? 
                    <p key={`${fixture.idEvent}-away-abb`}>{ fixture.strAwayTeam.slice(0, 3).toUpperCase() }</p> : 
                    <p key={`${fixture.idEvent}-away-abb`}>{ team.abbName }</p>
                  )
                }
            </div>
          ))}
        </div>
      )
    )
};

export default RenderHomeFixtures;