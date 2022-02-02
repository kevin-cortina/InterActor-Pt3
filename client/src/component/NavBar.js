
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
            <div className="col s2">
            <a href={''} className="btn modal-trigger"
              onClick={(e) => {
                e.preventDefault();
                currentPage === 'Results' ? handlePageChange('Login') : handlePageChange('Results');
              }} id = "login_btn">
                {currentPage === 'Results' ? ("Login/Sign-Up") : ("Back")}
            </a>
    
        </div>
        </div>
          {/* <div id="test" className="col s6 push-s3 valign-wrapper">
          <div className="row">
              <div className="col s2">
              <a href={''} className="btn modal-trigger"
                onClick={(e) => {
                  e.preventDefault();
                  currentPage === 'Results' ? handlePageChange('SignUp') : handlePageChange('Results')
                }} id = "signUp_btn">
                  {currentPage === 'Results' ? ("SignUp") : ("Back")}
              </a>
              </div>
              </div>
          </div> */}
        </div>
  </div>
    )
}
export default NavBar




