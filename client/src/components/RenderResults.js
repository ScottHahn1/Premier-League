import React from "react";

const RenderResults = ({ results }) => {

  return (
    results.length > 0 ?
      results.map((resultsGroup, index) => (
        <div className="results" key={resultsGroup[0].idEvent}>
          <h1 id="results-date">
            { new Date(results[index][0].dateEvent).toDateString() }
          </h1>
          {
            results[index].map(result => (
              <div className="results-container" key={result.idEvent}>
                <p>{result.strHomeTeam}</p>
                <img src={result.strHomeTeamBadge} alt={result.strHomeTeam} />
                {result.intHomeScore ? 
                  <p>{ result.intHomeScore } - { result.intAwayScore }</p>
                  : 
                  <p>TBD</p>
                }
                <img src={result.strAwayTeamBadge} alt={result.strAwayTeam} />
                <p>{result.strAwayTeam}</p>
                <img
                  width="50px"
                  src="https://cdn4.iconfinder.com/data/icons/buildings-and-structures-3/512/sports___stadium_soccer_football_fitness_building.png"
                  alt='Stadium'
                />
                <p>{result.strVenue}</p>
              </div>
            ))
          }
        </div>
    )) 
    : 
    <h1 style={{ textAlign: "center", fontFamily: "Arial" }}>Season hasn't started yet!</h1>
  )
};

export default RenderResults;