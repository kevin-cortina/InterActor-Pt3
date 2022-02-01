import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
// import { createUser } from '../utils/API';
import Auth from '../utils/auth';


const LoginModals = () => {

  return (
    <>
      <form>
          <div id='SignUpContainer'>
        <input type="text" id='UserName' placeholder='Username'/>  
        <input type="text" id='Password' placeholder='Please enter your password'/> <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default LoginModals;