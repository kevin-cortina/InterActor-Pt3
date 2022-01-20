import React from "react";
function resultCard(){
    return(
        <div className="container, left-align">
        <div className="col s12 m6 hoverable"  id="results-card-holder" style="background-color: #006064;">
            <div className="card-horizontal" style="background-color:#006064;">
              <div className="card-image-holder" id="poster-image" >
                {/* \{{#if poster_path}} */}
                <img className="card-image" src= "https://image.tmdb.org/t/p/w500/\{{poster_path}}"/>
                {/* \{{else}} */}
                <img className="card-image" src="./assets/pictures/noPoster.jpg"/>
                {/* \{{/if}} */}
              </div>
              <div className="card-stacked">
                <div className="card-content">
                    {/* to pass props later */}
                  <h4 id="movies-title"> \original_title </h4>
                  <div id="year"> \release_date</div>
                  <p id="overview"> \overview</p>
                  <button className="material-icons" id="favBtn" type="button" onclick="favBtnColor()">favorite</button>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
}
export default resultCard
