import { useState, useEffect } from 'react';

import { HomeCard } from './HomeCard';

import * as photoService from '../services/photoService';



export const Home = () => {
   
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        photoService.getLatestByCategory()
            .then(result => {
                setPhotos(result);
            })
    }, []);

    
    return (
        <>
            <div>
                <h1>Latest Photos in all Categories</h1>
            </div>

            <div className="catalog">
                {photos.length > 0
                    ? photos.map(x => <HomeCard key={x._id} photo={x} />)
                    : <span className="no-posts">
                        <p>No Posts Yet!</p>
                    </span>
                }
            </div>
        </>

    );
}