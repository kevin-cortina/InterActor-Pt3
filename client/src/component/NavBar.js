import React, {useState} from "react"
// import BioModals from './unsuedComps/BioModals'
// import LoginModal from "./unsuedComps/LoginModals"
import logo from '../assets/pictures/logo2.png';
import LoginModals from "./LoginModals";
import SignUpModal from "./SignUpModal"

function NavBar({ currentPage, handlePageChange }){

    return(
        <div className="row">
    <div id="test" className="col s3">
      <img className="profile-photo" src={logo} alt={"logo"}/>
    </div>

    <div id="test" className="col s2 push-s6 valign-wrapper">
        <div className="row">

          <div className="col s3">
          <button type="button" id="logout" className="btn blue darken-2 modal-trigger"
          
          //added just now
          onClick={({SignUpModal}) => handlePageChange('SignUp')}
          className={currentPage === 'SignUp' ? 'currentPage' : ''}
          //added just now

          >SignUp</button>
          </div>


          <div className="col s2">
          <button  type="button" className="btn green darken-4 modal-trigger" id = "bio_btn"
          
          //added just now
          onClick={({LoginModals}) => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'currentPage' : ''}
          //added just now
          
          >Login</button>
          </div>
        </div>

    </div>
  </div>
    )
}
export default NavBar




