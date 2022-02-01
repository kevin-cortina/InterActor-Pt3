import React from "react"
import logo from '../assets/pictures/logo2.png';


function NavBar({currentPage, handlePageChange}){


    return(
        <div className="row">
    <div id="test" className="col s3">
      <img className="profile-photo" src={logo} alt={"logo"}/>
    </div>

    <div id="test" className="col s2 push-s6 valign-wrapper">
        <div className="row">
          {/* <div className="col s3">
          <button id="logout" className="btn blue darken-2 modal-trigger">Logout</button>
          </div> */}
          <div className="col s2">
          <a href={''} className="btn modal-trigger"
            onClick={(e) => {
              e.preventDefault();
              currentPage === 'Results' ? handlePageChange('Login') : handlePageChange('Results');
            }} id = "login_btn">
              {currentPage === 'Results' ? ("Login") : ("Back")}
          </a>
          </div>
        </div>

    </div>
  </div>
    )
}
export default NavBar




