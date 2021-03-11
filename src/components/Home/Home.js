import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import League from "../League/League";

const Home = () => {
  const [Leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues));
  }, []);
  const first15 = Leagues.slice(0, 15);
  return (
    <section className="main-container">
      <div className="banner-home">
        <h1 className="banner-content">Power Man League </h1>
      </div>
      <h1 style={{marginTop:'20px'}}>Total League : {first15.length} </h1>
      <div className="league">
        {first15.map((league) => (
          <League league={league}></League>
        ))}
      </div>
    </section>
  );
};

export default Home;
