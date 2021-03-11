import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./League.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const League = (props) => {
  const { idLeague, strLeague, strSport, strLeagueAlternate } = props.league;

  const history = useHistory();
  const handleClick = (leagueId) => {
    history.push(`/league/${leagueId}`);
  };

  return (
    <div className="card col-md-3 league-card">
      <div className="card-body">
        <h5 className="card-title">{strLeague}</h5>
        <p className="card-text">Sports Type : {strSport}</p>
        <p className="card-text">{strLeagueAlternate}</p>
        <button
          onClick={() => handleClick(idLeague)}
          className="btn btn-success"
        >
          Explore <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default League;
