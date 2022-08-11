import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import * as authService from '../services/authService';

export const Logout =() =>{
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        authService.logout(user.accessToken)
        .then(()=>{
            navigate('/');
        })
        .catch(()=>{
            navigate('/');
        })
    })
    return null;
}