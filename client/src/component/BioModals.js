import React from "react";
function  modals(props){
  if(!props.show){
    return null
  }

 return(
    <div className="container">
    <div className="modal" id="biomodal">
      <div className="modal-content">
        <div className="container">
          <h1>Enter your bio</h1>
            <form method="post">
              <textarea id="bio" name="bio" type="text">
              </textarea>
            </form>
        </div>
          <div className="modal-footer">
          <a href="" className="modal-close btn red darken-3">Close</a>
          </div>
      </div>
    </div>
  </div>
 )
}

export default modals
