import React from "react";
function searchFilter(){
    return(
        <div class="row">
    <div className="column-1" style="background-color:#01579b;">
        <h4 className="center-align">Search Filters</h4>
        <div id="actorFilters">
            <h4 className="header hoverable chip" style="visibility:hidden;" id="search-filter-1">(Search Filter Placeholder) <i className="close material-icons" id="closeButton">close</i></h4>
            <h4 className="header hoverable chip" style="visibility:hidden;" id="search-filter-2">(Search Filter Placeholder) <i className="close material-icons" id="closeButton">close</i></h4>
            <h4 className="header hoverable chip" style="visibility:hidden;" id="search-filter-3">(Search Filter Placeholder) <i className="close material-icons" id="closeButton">close</i></h4>
        </div>
    </div>
    <div className="column-2" id="resultsCol" style="background-color:#004d40;">
        <h4 className="center-align">Results</h4>
    </div>
    </div>
    )
}
export default searchFilter