import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import * as authService from '../services/authService';


export const Login =() =>{
    const {loginHandler} = useContext(AuthContext)
    const navigate =useNavigate();
    const onSubmit =(e) =>{
        e.preventDefault();
        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target));
        authService.login(email,password)
        .then(authData =>{
            loginHandler(authData);
            navigate('/')
        })
        .catch(()=>{
            navigate('/404')
        })
    }
    return(
        <div classsname="login-div">

            <form  onSubmit={onSubmit}>
                <div class="container">
                    <h1>Login</h1>
                    <p>Please fill in this form to login.</p>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Enter Email" name="email" id="email" required />

                    <label htmlFor="psw">Password:</label>
                    <input type="password" placeholder="Enter Password" name="password" id="psw" required />

                    
                    <input type="submit" className="btn" value="Login" />
                </div>

                <div class="container signin">
                    <p>No acount yet? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    );
}