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
        <div key={index} className="results">
          <h1 id="results-date">{sortByTime[index][0].date.toDateString()}</h1>
          {sortByTime[index].map((item) => (
            <div key={`${(index += 1)}`} className="results-container">
              <p key={`${index} ${(index += 2)}`}>{item.homeTeam}</p>
              {teams
                .filter((team) => team.name === item.homeTeam)
                .map((team) => (
                  <img
                    key={`${index} ${(index += 3)}`}
                    width="45px"
                    height="45px"
                    src={team.badge}
                    alt={team.name}
                  />
                ))}
              {item.homeScore ? (
                <p key={`${index} ${(index += 4)}`}>
                  {item.homeScore} - {item.awayScore}
                </p>
              ) : (
                <p key={`${index} ${(index += 4)}`}>TBD</p>
              )}
              {teams
                .filter((team) => team.name === item.awayTeam)
                .map((team) => (
                  <img
                    key={`${index} ${(index += 5)}`}
                    width="45px"
                    height="45px"
                    src={team.badge}
                    alt={team.name}
                  />
                ))}
              <p key={`${index} ${(index += 6)}`}>{item.awayTeam}</p>
              <img
                key={`${index} ${(index += 7)}`}
                width="50px"
                src="https://cdn4.iconfinder.com/data/icons/buildings-and-structures-3/512/sports___stadium_soccer_football_fitness_building.png"
                alt={item.team}
              />
              <p key={`${index} ${(index += 8)}`}>{item.venue}</p>
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
