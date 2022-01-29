import React from "react";
// import exportInfo from "./../utils/helpers.js"
// import SearchFilter from './SearchFilter';

function SearchBar(){

  // const handleInput = exportInfo();

    return(      
<div className="nav-wrapper">
  <form>
    <div className="input-field" >
      <input id="searchBar" type="search" placeholder="Enter an actor name ..."/>
      <label className="label-icon"  htmlFor="search">
        <i className="material-icons" id="search-text" > </i></label>
      <i className="material-icons" id="xButton" >✕</i>
    </div>        
  </form>
</div>
  ) 
}
export default SearchBar