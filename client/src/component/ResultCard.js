import React from "react";

function ResultCard({ movieResults }){

  return(
    movieResults.map((movie) => {

      return (
        <div className="container, left-align">
          <div className="col s12 m6 hoverable" id="results-card-holder">
            <div className="card-horizontal">
              <div className="card-image-holder" id="poster-image">
                <img className="card-image" alt="Poster" src={movie.posterUrl} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 id="movies-title">{movie.movieTitle}</h4>
                  <div id="year">{ "(" + movie.movieYear + ")"  }</div>
                  <div id="director"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
  );
}
export default ResultCard;