import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
// import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const SignUpModal = ({ handlePageChange }) => {
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      // event.stopPropagation();
    }

    try {
        const { data } = await addUser({ variables: { ...userFormData } });
        console.log(userFormData)
        const { token, user } = data.addUser;
        console.log(user);
        Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });

    handlePageChange('Results');
  };

  return (
    <>
      <form className="loginForm"  onSubmit={handleFormSubmit}>
        {/* <alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </alert> */}
        <h4 id="signUpHead">Sign-Up</h4>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          {/* <textarea type='invalid'>Email is required!</textarea> */}
          </div>

          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          {/* <textarea type='invalid'>Password is required!</textarea> */}

          <button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'
          onClick={handleFormSubmit}
          >Submit</button>

          {/* <a
          className="btn modal-trigger"
          id = "submit_btn"
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </a> */}

        </div>
      </form>
    </>
  );
};

export default SignUpModal;
