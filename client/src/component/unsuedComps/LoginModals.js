import React from "react";
function LoginModal(props){
    return(
 <div className="container">
  {/* <div className="modal grey darken-4" id="login"> */}
    {/* <div className="modal-content"> */}
        <div className="container">
              <h4 className="green-text center">Log In</h4>
              
                <div className="row container grey darken-4">
                  <form className = "form login-form">
                    <div className="input-field col s4">
                      <input id="user_name" type="text"/>
                      <label for="user_name">User Name</label>
                    </div>

                    <div className="input-field col s4">
                        <input id="passWord" type="password"/>
                        <label for="passWord">Password</label>
                      </div>
                    <div className="col s4">
                          <button id = "login-button" className="btn waves-effect waves-light green"name="login-action">Login
                              <i className="material-icons right">send</i>
                          </button>
                        
                    </div>
                    </form>
                </div>

            <h4 className="blue-text center">Sign Up</h4>

        
              <div className="row container grey darken-4">
                <form className = "form signup-form">
                <div className="input-field col s4">
                    <input id="user_name_signup" type="text"/>
                    <label for="user_name_signup">Email</label>
                  </div>
                  <div className="input-field col s4">
                    <input id="user_name_signup" type="text"/>
                    <label for="user_name_signup">User Name</label>
                  </div>

                  <div className="input-field col s4">
                      <input id="passWordSignup" type="password"/>
                      <label for="passWordSignup">Password</label>
                  </div>
                  <div className="col s4">
                          <button id = "signup-button" className="btn waves-effect waves-light blue"name="signup-action">Login
                              <i className="material-icons right">send</i>
                          </button>
                
                  </div>
                  </form>
              </div>
        </div>
    {/* </div> */}
  <div className="modal-footer grey darken-4">
  <button onClick={props.onClose} className="modal-close btn red darken-3">Close</button>


    </div>
  {/* </div> */}
</div>
    )
}
export default LoginModal