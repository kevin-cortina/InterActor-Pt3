import React from "react";
import exportInfo from "./../utils/helpers.js"
import SearchFilter from './SearchFilter';

function SearchBar(){

  const handleInput = exportInfo();


    return(    
<nav>  
  <div className="nav-wrapper">
    <form>
      <div className="input-field" >
        <input id="searchBar" type="search" placeholder="Enter an actor name ..."/>
        <label className="label-icon"  htmlFor="search">
          <i className="material-icons" id="search-text" > </i></label>
        <i className="material-icons" id="xButton" >✕</i>
        {/* before code <i className="material-icons" id="x-button" style={styles.div2} onClick="document.getElementById('searchBar').value=''" >✕</i> */}
      </div>        
    </form>
  </div>
</nav>
  ) 
}
export default SearchBar