import { useEffect, useState } from 'react';
import {CatalogCard} from './CatalogCard';

import * as photoService from '../services/photoService';


export const Catalog = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getAll()
            .then(result => {
                setPhotos(result);
            })
    }, []);

    return (
        <>
            <div className="catalog">
            {photos.length > 0
                    ? photos.map(x => <CatalogCard key={x._id} photo={x} />)
                    : <span className="no-posts">
                        <p>No Posts Yet!</p>
                    </span>
                }
                </div>
        </>
    );
}