import React, {useState} from "react"
// import BioModals from './unsuedComps/BioModals'
// import LoginModal from "./unsuedComps/LoginModals"
import logo from '../assets/pictures/logo2.png';
import LoginModal from "./LoginModals";

function NavBar({ currentPage, handlePageChange }){

  const [showModal, setShowModal] = useState(false);

    return(
        <div className="row">
    <div id="test" className="col s3">
      <img className="profile-photo" src={logo} alt={"logo"}/>
    </div>

    <div id="test" className="col s2 push-s6 valign-wrapper">
        <div className="row">
          <div className="col s3">
          <button type="button" id="logout" className="btn blue darken-2 modal-trigger"
          
          >SignUp</button>
          </div>
          <div className="col s2">
          <a href={''} className="btn green darken-4 modal-trigger" id = "bio_btn"
          
          >Login</a>
          </div>
        </div>

    </div>
  </div>
    )
}
export default NavBar




