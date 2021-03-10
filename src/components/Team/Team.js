import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Friend = (props) => {
  const { idLeague, strLeague, strSport, strLeagueAlternate } = props.team;

  const history = useHistory();
  const handleClick = (teamId) => {
    history.push(`/team/${teamId}`);
  };

  return (
    <div className="card col-md-3  team-card">
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

export default Friend;
