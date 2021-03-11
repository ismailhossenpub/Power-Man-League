import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./LeagueDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMarsStroke,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutubeSquare,
  faTelegram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import male from "../../images/male.png";
import female from "../../images/female.png";

const LeagueDetail = () => {
  const { leagueId } = useParams();
  const [league, setLeague] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, []);

  const {
    strBadge,
    strBanner,
    strLeague,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
  } = league;
  return (
    <div className="main-container">
      <div style={{width:'100%', textAlign:'center'}}>
        <img style={{width:'100%'}}  src={strBanner} alt="no image show" />
      </div>
      <div className="container">
        <div className="card mb-3 card-bg">
          <div className="row g-0">
            <div className="col-md-6 p-5">
              <h2>{strLeague}</h2>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded :{" "}
                {intFormedYear}
              </p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}
              </p>
              <p>
                <FontAwesomeIcon icon={faMarsStroke} /> Gender : {strGender}
              </p>
            </div>
            <div className="col-md-6 p-4">
              <div className="card-body">
                {strGender === "Male" ? (
                  <img className="card-img" src={male} alt="" />
                ) : (
                  <img className="card-img" src={female} alt="" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>{strDescriptionEN}</p> <br />
        </div>
      </div>
      <div>
        <a className="social-icon" href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="social-icon" href="http://www.youtube.com/">
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </a>
        <a className="social-icon" href="https://www.twitter.com/">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </a>
        <a className="social-icon" href="https://www.telegram.com/">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </div>
    </div>
  );
};

export default LeagueDetail;
