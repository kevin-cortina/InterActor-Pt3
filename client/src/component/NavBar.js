import React from "react"
import logo from '../assets/pictures/logo2.png';
import Auth from '../utils/auth';

function NavBar({currentPage, handlePageChange}){

  const signOutFunc = async (e) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
       
    } catch (err) {
      console.error(err);
    }
  };



  return(
    <div className="row">
        <div id="test" className="col s3">
          <img className="profile-photo" src={logo} alt={"logo"}/>
        </div>

      <div id="test" className="col s2 push-s6 valign-wrapper">
          <div className="row">
            <div className="col s2">
            <a href={''} className="btn modal-trigger"
              onClick={
                Auth.loggedIn() ? Auth.logout :
                ((e) => {
                e.preventDefault();
                currentPage === 'Results' ? handlePageChange('Login') : handlePageChange('Results');
                })
              } id = "login_btn">
                {((currentPage === 'Results') && !(Auth.loggedIn())) ? ("Login/Sign-Up") : ("Back")}
                {((currentPage === 'Results') && (Auth.loggedIn())) ? ("Logout") : ("")}
            </a> 

            {/* className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)} */}
    
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




