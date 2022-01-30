import React, { useState, useEffect } from "react";
import { useAppContext } from '../assets/script/javascript';
import ActorFilter from '../component/ActorFilter';

function SearchFilter({ currentPage }){
    const { appData, actorFilterClicked } = useAppContext();
    // const actorFiltersRef = React.useRef(null);
    // const [renderFilter, setRender] = useState(null);
    
    // const updateActorFilters = () => {
    //     const actorFiltersDiv = actorFiltersRef;
    //     // Loop over appData actorFilters and create a button for each.
    //     // Sample: <h4 class="header hoverable chip" id="search-filter-1">(Search Filter Placeholder) <button>close</button></h4>
    //     // First, clear out old entries.
    //     // while (actorFiltersDiv.firstChild) {
    //     //     actorFiltersDiv.removeChild(actorFiltersDiv.firstChild);
    //     // }
    //     const actorFilters = appData2.actorFilters;
    //     // for (let i = 0; i < actorFilters.length; i++) {
    //     //     const actorFilter = actorFilters[i];
    
    //     //     const hTag = document.createElement('h4');
    //     //     hTag.classList.add('header', 'chip', 'hoverable', 'actor-filter');
    //     //     hTag.setAttribute('id', 'search-filter-' + actorFilter.id);
    //     //     hTag.textContent = actorFilter.name + ' ';
    
    //     //     const button = document.createElement('button')
    //     //     button.setAttribute('id', 'search-filter-' + actorFilter.id);
    //     //     button.classList.add('btn', 'white', 'gray-text', 'chip', 'close-button');
    //     //     button.textContent = '✕';
    //     //     hTag.appendChild(button);
    
    //     //     actorFiltersDiv.appendChild(hTag)

    //     // }
    //     console.log(actorFilters)
    //     return (
    //         <ActorFilter actorFilters={actorFilters} />
    //     )
    // };
    const handleClick = (e) => {
        actorFilterClicked(e);
        // console.log(e);
    }
    console.log(appData);

    // const [appData, setAppData] = useState({
    //     actorFilters: [],
    //     commonMovieIds: [],
    //     searchResults: {}
    // });
    
    const updateActorFilters = () => {
 
    };
    // const renderFilters = () => {
    //     const actorFiltersDiv = actorFiltersRef;
    //     const actorFilters = appData2.actorFilters;
    //     console.log(actorFilters)
    //     return (
    //         <ActorFilter actorFilters={actorFilters} />
    //     )
    // }
    // useEffect( () => {
    //     console.log(appData2)
       
    //     setRender(renderFilters())

    //     console.log(renderFilter)
    //     // console.log(appData);
    //     // localStorage.getItem("confirmData")
    //     }, [appData2.actorFilters]);


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
        {/* {renderPage()} */}
    </div>
    </div>
    )
}
export default SearchFilter

