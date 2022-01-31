import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginModals = () => {
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
    console.log(1)
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
      console.error(1);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </alert>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            placeholder='Your email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <textarea type='invalid'>Email is required!</textarea>
          </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <textarea type='invalid'>Password is required!</textarea>
        </div>
        <button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginModals;
