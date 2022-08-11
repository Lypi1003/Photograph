const baseUrl = 'http://localhost:3030';

export const getLatestByCategory = () =>{
    return fetch(`${baseUrl}/data/photos?sortBy=_createdOn%20desc&distinct=category`)
    .then(res=> res.json())
}

export const getAll = () =>{
    return fetch(`${baseUrl}/data/photos`)
    .then(res=> res.json())
}

export const getOne = (photoId) =>{
    return fetch(`${baseUrl}/data/photos/${photoId}`)
    .then(res=> res.json())
}