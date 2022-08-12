import { get, post,put } from "./requester";

const baseUrl = 'http://localhost:3030/data/photos';

export const getLatestByCategory = () =>get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`);
    
export const getAll = () =>get(baseUrl);
   
export const getOne = (photoId) =>get(`${baseUrl}/${photoId}`);

export const create =(photoData) => post(baseUrl, photoData);

export const edit =(photoId, photoData) => put(`${baseUrl}/${photoId}`, photoData);

