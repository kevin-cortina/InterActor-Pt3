import React, { useState } from "react"
// import BioModals from './unsuedComps/BioModals'
// import LoginModal from "./unsuedComps/LoginModals"

const styles = {
  div: {
    color: 'white'
  }
};

function NavBar(){
    return(
        <div className="row">
    <div id="test" className="col s3">
      <h1 style={styles.div}> InterActor</h1>
    </div>

    <div id="test" className="col s2 push-s6 valign-wrapper">
        <div className="row">
          <div className="col s3">
          <button id="logout" className="btn red darken-2 modal-trigger">Logout</button>
          </div>
          <div className="col s2">
          <a href="#biomodal" className="btn green darken-4 modal-trigger" id = "bio_btn">Login</a>
          </div>
        </div>

    </div>
  </div>
    )
}
export default NavBar