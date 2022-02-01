import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
// import { createUser } from '../utils/API';
import Auth from '../utils/auth';
import Modal from './unsuedComps/Modal'

const SignUpModal = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  // const [addUser] = useMutation(ADD_USER);

  return (
    <>
      <form>
        <div id='SignUpContainer'>
        <input type="text" id='Email' placeholder='Email'/>
        <input type="text" id='UserName' placeholder='Username'/>  
        <input type="text" id='Password' placeholder='Please enter your password'/> <button>Submit</button>
        <Modal />
      </div>
      </form>
    </>
  );
};

export default SignUpModal;
