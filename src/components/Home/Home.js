import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import Team from "../Team/Team";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.leagues));
  }, []);
  const first15 = teams.slice(0, 15);
  return (
    <section className="main-container">
      <div className="banner">
        <h1 className="banner-content">Team Power </h1>
      </div>
      <div className="team">
        {first15.map((team) => (
          <Team team={team}></Team>
        ))}
      </div>
    </section>
  );
};

export default Home;
