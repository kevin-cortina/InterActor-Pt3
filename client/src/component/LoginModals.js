import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutations';
// import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const LoginModals = ({ handlePageChange }) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
        const { data } = await loginUser({
          variables: { ...userFormData }
        });
        const { token, user } = data.loginUser;
        console.log(user);
        Auth.login(token);
    } catch (err) {
      setShowAlert(true);
    }

    setUserFormData({
      // username: '',
      email: '',
      password: '',
    });
    handlePageChange('Results');
  };

  // const buttonTest = ({ buttonTest }) => {
  //   console.log(10)
  // }

  return (
    <>
      <form className="loginForm" noValidate validated="false" onSubmit={handleFormSubmit}>
        <h4 id="loginHead">Login</h4>
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

        </div>
      </form>
    </>
  );
};

export default LoginModals;