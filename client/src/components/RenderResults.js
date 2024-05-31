import React from "react";

const RenderResults = ({ sortByTime }) => {

  return (
    sortByTime.length > 0 ?
      sortByTime.map((_, index) => (
        <div className="results" key={sortByTime[index][0].id}>
          <h1 id="results-date">{sortByTime[index][0].date.toDateString()}</h1>
          {
            sortByTime[index].map(match => (
              <div className="results-container" key={match.id + 1}>
                <p>{match.homeTeam}</p>
                <img src={match.homeTeamBadge} alt={match.homeTeam} />
                {match.homeScore ? 
                  <p>{ match.homeScore } - { match.awayScore }</p>
                  : 
                  <p>TBD</p>
                }
                <img src={match.awayTeamBadge} alt={match.awayTeam} />
                <p>{match.awayTeam}</p>
                <img
                  width="50px"
                  src="https://cdn4.iconfinder.com/data/icons/buildings-and-structures-3/512/sports___stadium_soccer_football_fitness_building.png"
                  alt={match.team}
                />
                <p>{match.venue}</p>
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