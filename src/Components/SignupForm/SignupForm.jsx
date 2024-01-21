import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { HiArrowCircleRight } from 'react-icons/hi';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send the form data as JSON in the request body
            const response = await axios.post('http://127.0.0.1:8000/signup', formData);
            console.log(response.data);
            // Handle further actions after successful signup here, e.g., redirect to login page
        } catch (error) {
            console.error('Error sending data to server:', error);
            // Handle errors here, e.g., show error message to the user
        }
    };

    return (
        <div className="registration-container">
            <h1 className="form-title">Register</h1>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name" // Add the name attribute for form serialization
                        placeholder="Enter your name"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="surname">Surname</label>
                    <input
                        type="text"
                        id="surname"
                        name="surname" // Add the name attribute for form serialization
                        placeholder="Enter your surname"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email" // Add the name attribute for form serialization
                        placeholder="Enter your email"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone" // Add the name attribute for form serialization
                        placeholder="Enter your phone number"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password" // Add the name attribute for form serialization
                        placeholder="Enter your password"
                        required
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submit-button">
                    Register <HiArrowCircleRight />
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
