import { post } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => post(`${baseUrl}/login`, { email, password });

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });
        
        return response;
    } catch (error) {

    }
}

export const register =(email,password)=> 
    post(`${baseUrl}/register`,{email,password});