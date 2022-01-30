import React from "react";
import exportInfo from "./../utils/helpers.js"
import LoginModal from "./unsuedComps/LoginModals.js";

function SearchFilter(){
    const handleInput = exportInfo();

    return(
        <div className="row">
        <div className="column-1">
        <h4 className="center-align" id="searchFilterTitle">Search Filters</h4>
        <div id="actorFilters">
        </div>
    </div>
    <div className="column-2" id="resultsCol">
        <h4 className="center-align" id="searchFilterResultsTitle">Results</h4>
        <LoginModal/>
    </div>
    </div>
    )
}
export default SearchFilter