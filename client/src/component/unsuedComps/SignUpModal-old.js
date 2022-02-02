import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
// import { createUser } from '../utils/API';
import Auth from '../utils/auth';


const SignUpModal = () => {
//   // set initial form state
//   const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
//   // set state for form validation
//   const [validated] = useState(false);
//   // set state for alert
//   const [showAlert, setShowAlert] = useState(false);

//   const [addUser] = useMutation(ADD_USER);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(1)
//     // check if form has everything (as per react-bootstrap docs)
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//         const { data } = await addUser ({
//           variables: { ...userFormData}
//         });

//         const { token, user } = data.addUser;
//         console.log(user);
//         Auth.login(token);
//     } catch (err) {
//       console.error(err);
//     }

//     setUserFormData({
//       username: '',
//       email: '',
//       password: '',
//     });
//   };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </alert>

        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <textarea type='invalid'>Username is required!</textarea>
        </div>

         <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Your email address'
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
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpModal;
