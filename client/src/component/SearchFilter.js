import React, { useState, useEffect } from "react";
import { useAppContext, apiKey, tmdbUrl } from '../assets/script/javascript';
import ActorFilter from '../component/ActorFilter';
import LoginModals from '../component/LoginModals';
import ResultCard from "./ResultCard";

function SearchFilter({ currentPage, handlePageChange }){
    const { appData, actorFilterClicked } = useAppContext();

    const handleClick = (e) => {
        actorFilterClicked(e);
    }
  
    const [cardData, setCardData] = useState([]);
    const [containerData, setContainer] = useState([]);

    useEffect( () => {
        const movieResultIds = appData.commonMovieIds
        // console.log(movieResultIds)
        setCardData([]);
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
              if (!data.release_date) {
                  movieData[2] = data.status;
              }
            //   console.log(movieData);
            } catch (err) {
                console.log("Something went wrong calling this url:", movieUrl, err);
            };
            let posterUrl = movieData[0];
            let movieTitle = movieData[1];
            let movieYear = movieData[2];

            let resultCardData = [];
            resultCardData.push({posterUrl, movieTitle, movieYear});
            // let dataContainer = resultCardData;
            // dataContainer = [...cardData, ...resultCardData];
            setCardData(cardData => [...cardData, ...resultCardData]);
        })

    }, [appData.commonMovieIds]);

    const renderPage = () => {
        if (currentPage === 'Results') {
            return <ResultCard movieResults={cardData} />;
        }
        if (currentPage === 'Login') {
            return <LoginModals handlePageChange={ handlePageChange }/>;
        }
    };


    return(
        <div className="row">
            <div className="column-1">
                <h4 className="center-align" id="searchFilterTitle">Search Filters</h4>
                <div id="actorFilters" onClick={handleClick}>
                    <ActorFilter actorFilters={appData.actorFilters} />
                </div>
            </div>
            <div className="column-2" id="resultsCol">
                <h4 className="center-align" id="searchFilterResultsTitle">Results</h4>
                {/* <ResultCard movieResults={cardData} /> */}
                {/* <LoginModals /> */}
                {renderPage()}

            </div>
        </div>
    )
}
export default SearchFilter