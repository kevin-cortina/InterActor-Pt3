import React from "react";
import { useAppContext } from '../assets/script/javascript';


function SearchBar(){
  const searchBarRef = React.useRef(null);
  const { searchForActor } = useAppContext();
  const handleSubmit = (event) => {
    // console.log("This is the submit function working")
    event.preventDefault();
    // Get value from text field.
    const searchString = searchBarRef.current.value;
    // call searchForActor()
    
    searchForActor(searchString);
    searchBarRef.current.value='';
  }

  return(    
    <nav>  
      <div className="nav-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-field" >
            <input id="searchBar" ref={searchBarRef} type="search" placeholder="Enter an actor name ..." />
            <label className="label-icon"  htmlFor="search">
              <i className="material-icons" id="search-text"> </i></label>
            <i className="material-icons" id="xButton" >✕</i>
          </div>        
        </form>
      </div>
    </nav>

  ) 
}
export default SearchBar