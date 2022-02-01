// Global Variables
import React, { createContext, useContext, useState } from 'react';

export const apiKey = process.env.REACT_APP_API_KEY;
export const tmdbUrl = 'https://api.themoviedb.org/3/';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState({
        actorFilters: [],
        commonMovieIds: [],
        searchResults: {}
    });

    const searchForActor = searchString => {
        const urlActorIdBySearchString = makeUrlActorIdBySearchString(searchString);
        doFetch(urlActorIdBySearchString)
            .then((data) => {
                // Check for duplicate actors.
                const isDuplicate = checkForDuplicateActor(data);
                if (isDuplicate) {
                    return;
                }
                const actor = makeActor(data);
                saveAppData('actor', actor);
                doDerivedData(actor);
            });
    };

    const makeUrlActorIdBySearchString = actorName => {
        // Example: https://api.themoviedb.org/3/search/person?api_key=67ef4e4a60b4acfa5458eea4807a1de1&query=john%20travolta&include_adult=false
        let url = tmdbUrl;
        url += 'search/person';
        url += '?api_key=' + apiKey;
        url += '&query=' + actorName;
        url += '&include_adult=true';
        return url;
    };

    const doFetch = async (url) => {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (err) {
            console.log("Something went wrong calling this url:", url, err);
        }
    };

    const checkForDuplicateActor = data => {
        const actorId = data.results[0].id;
        // Try to find this actor id.
        const existingActor = appData.actorFilters.find( (actor) => {
            return actor.id === actorId;
        });
    
        if(existingActor) return true;
        return false;
    };
    
    const makeActor = data => {
        const dataResult = data.results[0];
        const actorId = dataResult.id;
        const actorName = dataResult.name;
        const actor = { id: actorId, name: actorName };
        return actor;
    };

// Utility Functions. //////////////////////////////////
    const saveAppData = (key, value) => {
        if (key === 'actor') {
            // console.log(appData.actorFilters, value);
            let newData = appData;
            newData.actorFilters.push(value);
            setAppData({...newData});
        } else if (key === 'actorDelete') {
            // Find the index of the actor to delete in actorFilters. 
            const actorToDeleteIndex = appData.actorFilters.findIndex((element) => {
                return element.id === value;
            });
            // splice the array.
            let newData = appData;
            newData.actorFilters.splice(actorToDeleteIndex, 1);
            // Remove actorId from search results.
            delete newData.searchResults[value];
            setAppData({...newData});
        } else if (key === 'common') {
            let newData = appData;
            newData.commonMovieIds = value;
            setAppData({...newData});
        } else {
            let newData = appData;
            newData.searchResults[key] = value;
            setAppData({...newData});
        }
        // console.log('appData is now:', appData)
    };


    const doDerivedData = actor => {
        const urlMoviesByActorId = makeUrlMoviesByActorId(actor.id);
        doFetch(urlMoviesByActorId)
            .then((data) => {
                const searchResults = processSearchResults(actor, data);
                saveAppData(actor.id, searchResults);
                updateCommonMovieIds();
                // Now, FINALLY refresh the display with what's now in appData.
                // showResults();
            });
    };

    const makeUrlMoviesByActorId = actorId => {
        // Example: https://api.themoviedb.org/3/person/8891/movie_credits?api_key=67ef4e4a60b4acfa5458eea4807a1de1
        let url = tmdbUrl;
        url += 'person/' + actorId;
        url += '/movie_credits';
        url += '?api_key=' + apiKey;
        return url;
    }

    const processSearchResults = (actor, data) => {
        const movieIds = processMovieList(data);
        const searchResult = {
            actorName: actor.name,
            movieIds: movieIds
        };
        return searchResult;
    };

    const processMovieList = data => {
        const dataMovies = data.cast;
        let movieIds = [];
        for (let i = 0; i < dataMovies.length; i++) {
            movieIds.push(dataMovies[i].id);
        }
        return movieIds;
    };

// Updates appData.commonMovieIds.
    const updateCommonMovieIds = () => {    // TO BE REPLACED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // If one actor, show all their movies.
        const numberOfActorFilters = appData.actorFilters.length;
        if (numberOfActorFilters === 1) {
            // If one actor, commonMovieIds should be their movies.
            const loneActorsId = appData.actorFilters[0].id;
            const actorsMoviesIds = appData.searchResults[loneActorsId].movieIds;
            saveAppData('common', actorsMoviesIds);
            return;
        }

        const movieIdsToCompare = getMovieArraysToCompare();
        if (movieIdsToCompare) {
            const commonMovieIds = findCommonMovies(movieIdsToCompare);
            // Store common movie ids.
            saveAppData('common', commonMovieIds);
        }
    };



// Determine which 2 arrays of movie ids to compare.
// If only 1 actorFilter no point in comparing so return null.
// If 2 actors, compare arrays of their movie ids.
// If 3 or more actors, compare previous array of common movie ids to most recently added actorFilter.
    const getMovieArraysToCompare = () => {
        const numberOfActorFilters = appData.actorFilters.length;
        let movieIds_1 = 0;
        let movieIds_2 = 0;
        if (numberOfActorFilters === 1) {
            return false;
        } else if (numberOfActorFilters === 2) {
            // Compare the 2 actor filters in appData.
            const actorId_1 = appData.actorFilters[0].id;
            const actorId_2 = appData.actorFilters[1].id;
            movieIds_1 = appData.searchResults[actorId_1].movieIds;
            movieIds_2 = appData.searchResults[actorId_2].movieIds;
        } else {
            // Compare latest actorFilter to previously calculated commonMovieIds.
            movieIds_1 = appData.commonMovieIds;
            const latestActorId = appData.actorFilters[appData.actorFilters.length - 1].id;
            movieIds_2 = appData.searchResults[latestActorId].movieIds;
        }
        return [movieIds_1, movieIds_2];
    };

    const findCommonMovies = (movieIdsToCompare) => {
        // Compare two actors at a time.
        const movieId2_1 = movieIdsToCompare[0];
        const movieIds_2 = movieIdsToCompare[1];
        const commonMovieIds = movieId2_1.filter(x => movieIds_2.includes(x));
        return commonMovieIds;
    };

// Event Handlers //////////////////////////////////////////////////////////
    function actorFilterClicked(event) {
        if (!event.target.matches('button')) return;
        // Get id from target since it has actor id in it.
        const idAttributeValue = event.target.attributes.getNamedItem('id').value;
        console.log(idAttributeValue)
        const idAttributeValueSplit = idAttributeValue.split('-');
        const actorId = parseInt(idAttributeValueSplit[2]);
        removeActor(actorId);
    };

    const removeActor = (actorId) => {
        // Remove actor from filters & searchResults.
        saveAppData('actorDelete', actorId);
        // Recalc common movie ids.    
        refreshCommonMovieIds();
        // showResults();
    };


    const refreshCommonMovieIds = () => {
        const numberOfActorFilters = appData.actorFilters.length;
        console.log('In refreshCommonMovieIds:', numberOfActorFilters)
        if (numberOfActorFilters === 0) {
            // If no actors, there should be NO commonMovieIds.
            saveAppData('common', []);
        } else if (numberOfActorFilters === 1) {
            // If one actor, commonMovieIds should be THEIR movies.
            const loneActorsId = appData.actorFilters[0].id;
            const actorsMoviesIds = appData.searchResults[loneActorsId].movieIds;
            saveAppData('common', actorsMoviesIds);
        } else if (numberOfActorFilters === 2) {
            // Get the movie ids for the actors and compare.
            const commonMovieIds = getFirstTwoActorsCommonMovieIds();
            saveAppData('common', commonMovieIds);
        } if (numberOfActorFilters > 2) {
            // With more than 2 actors, need to call findCommonMovies(movieIds_1, movieIds_2) repetitively.
            // But 1st, prep commonMovieIds with movidIds from movies between actors 1 & 2.  
            let commonMovieIds = getFirstTwoActorsCommonMovieIds();
            for (let actorFilter of appData.actorFilters) {
                const actorsMovieIds = appData.searchResults[actorFilter.id].movieIds;
                commonMovieIds = findCommonMovies([commonMovieIds, actorsMovieIds]);
            }
            saveAppData('common', commonMovieIds);
        }
    };

    const getFirstTwoActorsCommonMovieIds = () => {
        const actorId_1 = appData.actorFilters[0].id;
        const actorId_2 = appData.actorFilters[1].id;
        const movieIds_1 = appData.searchResults[actorId_1].movieIds;
        const movieIds_2 = appData.searchResults[actorId_2].movieIds;
        const commonMovieIds = findCommonMovies([movieIds_1, movieIds_2]);
        return commonMovieIds;
    };








// Functions for display //////////////////////////////////////////////////////////
// Call this whenever appData has been updated.
// const refreshDisplay = () => {
//     let newData = appData;
//     setAppData({...newData});
//     // updateActorFilters();
//     // showResults();
// };






// const init = () => {
//     searchField.focus();
// };
// init();

//Results populaton
    // const resultsCol = document.querySelector("#resultsCol");

    // function showResults() {
        
    //     let movieResultIds = appData.commonMovieIds;
        
    //     // resultsCol.innerHTML = "";

    //     if (movieResultIds.length === 0) {
    //         let resultsText = resultsCol.appendChild(document.createElement("h4"));
    //         resultsText.setAttribute("class", "center-align");
    //         resultsText.textContent = "Results";
    //     }

    //     for (var i = 0; i < movieResultIds.length; i++) {

    //         let movieUrl = tmdbUrl;
    //         movieUrl += "movie/";
    //         movieUrl += movieResultIds[i];
    //         movieUrl += "?api_key=" + apiKey;
    //         movieUrl += "&append_to_response=credits";
    //         doFetch(movieUrl)
    //             .then((data) => {
                    
    //                 let imgUrl = "https://image.tmdb.org/t/p/w500";
    //                 if (data.poster_path) {
    //                     imgUrl += data.poster_path;
    //                     imgUrl += '?api_key=' + apiKey;
    //                 } else {
    //                     imgUrl = "./assets/pictures/noPoster.jpg";
    //                 }

    //                 let movieData = [imgUrl, data.title, data.release_date.substring(0, 4), data.credits];

    //                 if (!data.release_date) {
    //                     movieData[2] = data.status;
    //                 }

    //                 console.log(data.status);

                    // let directorName = ;
                    // createCard(movieData);
                    // console.log(data);
    //             });
    //     }

    // }

    // function createCard(movieData) {
    //     let imgUrl = movieData[0];
    //     let movieTitle = movieData[1];
    //     let movieYear = movieData[2];
    //     // let directorName = ;

    //     let containerDiv = resultsCol.appendChild(document.createElement("div"));
    //     containerDiv.setAttribute("class", "container, left-align");

    //     let hoverDiv = containerDiv.appendChild(document.createElement("div"));
    //     hoverDiv.setAttribute("class", "col s12 m6 hoverable");
    //     hoverDiv.setAttribute("id", "results-card-holder");

    //     let cardHorizDiv = hoverDiv.appendChild(document.createElement("div"));
    //     cardHorizDiv.setAttribute("class", "card-horizontal");

    //     let cardImageDiv = cardHorizDiv.appendChild(document.createElement("div"));
    //     cardImageDiv.setAttribute("class", "card-image-holder");
    //     cardImageDiv.setAttribute("id", "poster-image");

    //     let posterImg = cardImageDiv.appendChild(document.createElement("img"));
    //     posterImg.setAttribute("class", "card-image");
    //     posterImg.setAttribute("src", imgUrl);

    //     let cardStackedDiv = cardHorizDiv.appendChild(document.createElement("div"));
    //     cardStackedDiv.setAttribute("class", "card-stacked");

    //     let cardContentDiv = cardStackedDiv.appendChild(document.createElement("div"));
    //     cardContentDiv.setAttribute("class", "card-content");

    //     let movieTitleDiv = cardContentDiv.appendChild(document.createElement("h4"));
    //     movieTitleDiv.setAttribute("id", "movies-title");
    //     movieTitleDiv.textContent = movieTitle;

    //     let movieYearDiv = cardContentDiv.appendChild(document.createElement("div"));
    //     movieYearDiv.setAttribute("id", "year");
    //     movieYearDiv.textContent = "(" + movieYear + ")";

    //     let directorNameDiv = cardContentDiv.appendChild(document.createElement("div"));
    //     directorNameDiv.setAttribute("id", "director");
    // }
    return (
        <AppContext.Provider
            value={{ searchForActor,
                // updateActorFilters,
                doDerivedData,
                processSearchResults,
                processMovieList,
                updateCommonMovieIds,
                // refreshDisplay,
                getMovieArraysToCompare,
                findCommonMovies,
                getFirstTwoActorsCommonMovieIds,
                actorFilterClicked,
                removeActor,
                saveAppData,
                makeActor,
                checkForDuplicateActor,
                doFetch,
                makeUrlActorIdBySearchString,
                makeUrlMoviesByActorId,
                // showResults,
                appData
                }}
        >
            {children}
        </AppContext.Provider>
    )
}
