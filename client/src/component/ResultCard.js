import React from "react";

const styles = { 
  div: { 
    backgroundColor: "#006064"
   }
 }

// const onClick = {
//   div: {
//     favBtnColor()
//   }
// }

function ResultCard(){
    return(
        <div className="container, left-align">
        <div className="col s12 m6 hoverable"  id="results-card-holder">
            <div className="card-horizontal" >
              <div className="card-image-holder" id="poster-image" >
                </div>
              </div>
            </div>
        </div>
    )
}
export default ResultCard
