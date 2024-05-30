import React from "react";
import { useEffect, useState } from "react";

const RenderResults = ({ sortByTime, teams, loading, setLoading }) => {
  const [results, setResults] = useState([]);
  const [newResults, setNewResults] = useState([]);

  useEffect(() => {
    sortByTime.length &&
      sortByTime.reverse().map((item, index) => {
        results.length !== sortByTime.length &&
          setResults((prev) => [...prev, index]);
        results.length && setNewResults([...new Set(results)]);
      });
  }, [sortByTime]);

  useEffect(() => {
    teams.length && setLoading(false);
  });
  
  return loading === false ? (
    newResults.length > 0 ? (
      newResults.map((item, index) => (
        <div key={item} className="results">
          <h1 id="results-date">{sortByTime[index][0].date.toDateString()}</h1>
          {sortByTime[index].map((item) => (
            <div key={`${(index += 1)}`} className="results-container">
              <p>{item.homeTeam}</p>
              <img src={item.homeTeamBadge} alt={item.homeTeam} />
              {item.homeScore ? (
                <p>
                  {item.homeScore} - {item.awayScore}
                </p>
              ) : (
                <p>TBD</p>
              )}
              <img src={item.awayTeamBadge} alt={item.awayTeam} />
              <p>{item.awayTeam}</p>
              <img
                width="50px"
                src="https://cdn4.iconfinder.com/data/icons/buildings-and-structures-3/512/sports___stadium_soccer_football_fitness_building.png"
                alt={item.team}
              />
              <p>{item.venue}</p>
            </div>
          ))}
        </div>
      ))
    ) : (
      <h1 style={{ textAlign: "center", fontSize: "4rem", color: "indigo" }}>
        Season hasn't started yet!
      </h1>
    )
  ) : (
    <div className="loading-container">
      <div className="loading"></div>
    </div>
  );
};

export default RenderResults;