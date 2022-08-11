import { post } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => post(`${baseUrl}/login`, { email, password });

export const logout = async (accessToken) => {
    try {
        await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });
    } catch (error) {

    }
}
