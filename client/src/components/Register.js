import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import * as authService from '../services/authService';

export const Register = () => {
    const { loginHandler } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                loginHandler(authData);
                navigate('/');
            })
            .catch(()=>{
                navigate('/404')
            })
    }
    return (
        <div classsname="register-div">

            <form onSubmit={onSubmit}>
                <div class="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" id="password" required />

                    <label htmlFor="confirm-password"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="confirm-password" id="confirm-password" required />
                   
                   <input type="submit" className="btn" value="Register" />
                </div>

                <div class="container signin">
                    <p>Already have an account? <Link to="/login">Sign in </Link>.</p>
                </div>
            </form>
        </div>
    );
}