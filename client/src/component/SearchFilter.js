import React from "react";
import ResultCard from "./ResultCard";
function searchFilter(){

    const style1 = {
        backgroundColor: "#01579b"
    }

    const style2 = {
        backgroundColor: "#004d40"
    }

    return(
        <div className="row">
    <div className="column-1" style={style1}>
        <h4 className="center-align">Search Filters</h4>
        <div id="actorFilters">
           {/* <h4 className="header hoverable chip" style="visibility:hidden;" id="search-filter-1">(Search Filter Placeholder) <i className="close material-icons" id="closeButton">close</i></h4>
            <h4 className="header hoverable chip" style="visibility:hidden;" id="search-filter-2">(Search Filter Placeholder) <i className="close material-icons" id="closeButton">close</i></h4>
            <h4 className="header hoverable chip" style="visibility:hidden;" id="search-filter-3">(Search Filter Placeholder) <i className="close material-icons" id="closeButton">close</i></h4>*/}
        </div>
    </div>
    <div className="column-2" id="resultsCol" style={style2}>
        <h4 className="center-align">Results</h4>
        {/*<ResultCard/>*/}
    </div>
    </div>
    )
}
export default searchFilter