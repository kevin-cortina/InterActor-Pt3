import React from "react";
function searchBar(){
    return(      
<div class="nav-wrapper">
  <form style="background-color: #01579b;">
    <div className="input-field" style="background-color: white;" >
      <input id="searchBar" type="search" style="background-color: white; color: black;" placeholder="Enter an actor name ..."/>
      <label className="label-icon" style="background-color: white;" for="search">
        <i className="material-icons" id="search-text" style="color:black;">search </i></label>
      <i className="material-icons" id="x-button" style="background-color: white;" onclick="document.getElementById('searchBar').value=''" >✕</i>
    </div>        
  </form>
</div>
  ) 
}
export default searchBar