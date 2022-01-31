import React from "react";
import { apiKey, tmdbUrl } from "../assets/script/javascript";

function ResultCard({ movieResultIds }){


  return(
    movieResultIds.map( async (movie) => {

      let movieUrl = tmdbUrl;
      movieUrl += "movie/";
      movieUrl += movie;
      movieUrl += "?api_key=" + apiKey;
      movieUrl += "&append_to_response=credits";
      try {
        const response = await fetch(movieUrl);
        const data = await response.json();
        var imgUrl = "https://image.tmdb.org/t/p/w500";
        if (data.poster_path) {
            imgUrl += data.poster_path;
            imgUrl += '?api_key=' + apiKey;
        } else {
            imgUrl = require("../assets/pictures/noPoster.jpg");
        }
        var movieData = [imgUrl, data.title, data.release_date.substring(0, 4), data.credits];
        // console.log(movieData);
        if (!data.release_date) {
            movieData[2] = data.status;
        }
      } catch (err) {
          console.log("Something went wrong calling this url:", movieUrl, err);
      };
      let posterUrl = movieData[0];
      let movieTitle = movieData[1];
      let movieYear = movieData[2];

      console.log(posterUrl, movieTitle, movieYear)
      return (
        <div className="container, left-align">
          <div className="col s12 m6 hoverable" id="results-card-holder">
            <div className="card-horizontal">
              <div className="card-image-holder" id="poster-image">
                <img className="card-image" alt="Poster" src={posterUrl} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 id="movies-title">{movieTitle}</h4>
                  <div id="year">{ "(" + movieYear + ")"  }</div>
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
