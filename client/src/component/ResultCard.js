import React from "react";
import { apiKey, tmdbUrl } from "../assets/script/javascript";

function ResultCard({ movieResultIds }){
  return(
    movieResultIds.map((movie) => {


      <div className="container, left-align">
        <div className="col s12 m6 hoverable" id="results-card-holder">
          <div className="card-horizontal">
            <div className="card-image-holder" id="poster-image">
              <img className="card-image" alt="Poster" src="https://image.tmdb.org/t/p/w500/wdniUkm0hwXv2RqzvwWy5XtRNvB.jpg?api_key=67ef4e4a60b4acfa5458eea4807a1de1" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 id="movies-title">Out of Time</h4>
                <div id="year">(2003)</div>
                <div id="director"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    })
  );
}
export default ResultCard;
