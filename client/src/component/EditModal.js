import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { UPDATE_PASSWORD, REMOVE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const EditModals = ({ handlePageChange }) => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [showAlert, setShowAlert] = useState(false);
    const [updatePW] = useMutation(UPDATE_PASSWORD);
    const [deleteUser] = useMutation(REMOVE_USER);


    const handleInputChange = (event) => {
        const { password, value } = event.target;
        setUserFormData({ ...userFormData, [password]: value });
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
            const { data } = await updatePW({
                variables: { ...userFormData }
            });

            const { token, user } = data.updatePW;
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(22);
            setShowAlert(true);
        }

        try {
            const { data } = await deleteUser({
                variables: { ...userFormData }
            });
            const deleteData = async id => {
                await deleteUser(id);
            };

            const { token, user } = data.deleteUser;
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(33);
            setShowAlert(true);
        }

        setUserFormData({
            email: '',
            password: '',
        });
        handlePageChange('Results');
    };

    return (
        <>
            <form className="editForm" noValidate validated="false" onSubmit={handleFormSubmit}>
                {/* <alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                  Something went wrong with your user credentials!
                </alert> */}
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
                </div>
                <button
                    disabled={!(userFormData.email && userFormData.password)}
                    type='submit'
                    variant='success'>
                    Save Changes
                </button>

                <button
                    disabled={!(userFormData.email && userFormData.password)}
                    onClick={() => deleteData(user.id)}
                >
                    Delete User
                </button>
            </form>
        </>
    );
};

export default EditModals;