import { get } from "./requester";

const baseUrl = 'http://localhost:3030';

export const getLatestByCategory = () =>get(`${baseUrl}/data/photos?sortBy=_createdOn%20desc&distinct=category`);
    
export const getAll = () =>get(`${baseUrl}/data/photos`)
   

export const getOne = (photoId) =>get(`${baseUrl}/data/photos/${photoId}`)