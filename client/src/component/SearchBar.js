import React from "react";
import exportInfo from "./../utils/helpers.js"
function SearchBar(){

  //const handleInput = exportInfo();

  const styles = { 
    div1: { 
      backgroundColor: "#01579b"
     },
     div2: {
      backgroundColor: "white"
     },
     div3: {
      color: "black"
     },
     div4: {
      backgroundColor: "white",
      color: "black"
     }
   }
    return(      
<div className="nav-wrapper">
  <form style={styles.div1}>
    <div className="input-field" style={styles.div2} >
      <input id="searchBar" type="search" style={styles.div4} placeholder="Enter an actor name ..."/>
      <label className="label-icon" style={styles.div2} htmlFor="search">
        <i className="material-icons" id="search-text" style={styles.div3}>search </i></label>
      <i className="material-icons" id="x-button" style={styles.div2} /*onClick={document.getElementById('searchBar').value=''}*/ >✕</i>
    </div>        
  </form>
</div>
  ) 
}
export default SearchBar