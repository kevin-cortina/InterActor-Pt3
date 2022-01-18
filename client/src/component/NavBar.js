import React, { useState } from "react"
import BioModals from './BioModals'
import LoginModal from "./LoginModals"


function NavBar(){
  const [showLoginModal, setshowLoginModal]= useState (false)

    return(
        <div className="row">
    <div id="test" className="col s3">
      <h1 style="color: white;"> InterActor</h1>
    </div>

    <div id="test" className="col s2 push-s6 valign-wrapper">
      {/* {{#if loggedIn}} */}
        <div className="row">
          <div className="col s3">
          <button id="logout" className="btn red darken-2 modal-trigger">Logout</button>
          </div>
          <div className="col s2">
          <a href="#biomodal" className="btn green darken-4 modal-trigger" id = "bio_btn">Bio</a>
          </div>
        </div>
      {/* {{else}} */}
      <button  onClick={()=> setshowLoginModal(true)} className="btn green darken-4 modal-trigger" id = "login_btn">Login/Signup</button>
      {/* {{/if}} */}
      <LoginModal show = {showLoginModal}onClose ={()=> setshowLoginModal(false)}></LoginModal>

    </div>
  </div>
    )
}
export default NavBar