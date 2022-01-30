import React, { useEffect } from "react";
import { useAppContext } from '../assets/script/javascript';
import ActorFilter from '../component/ActorFilter';
import ResultCard from "./ResultCard";

function SearchFilter({ currentPage }){
    const { appData, actorFilterClicked } = useAppContext();

    const handleClick = (e) => {
        actorFilterClicked(e);
    }
  
    useEffect( () => {
        // console.log( appData);        
    }, [appData]);


    return(
        <div className="row">
            <div className="column-1">
                <h4 className="center-align" id="searchFilterTitle">Search Filters</h4>
                <div id="actorFilters" onClick={handleClick}>
                    <ActorFilter actorFilters={appData.actorFilters} />
                </div>
            </div>
            <div className="column-2" id="resultsCol">
                <h4 className="center-align" id="searchFilterResultsTitle">{appData.commonMovieIds.length === 0 ? Results : ""}</h4>
                <ResultCard movieResultIds={appData.commonMovieIds} />
            </div>
        </div>
    )
}
export default SearchFilter

