
import { useContext } from 'react';

import { PhotoContext } from '../contexts/PhotoContext';
import {CatalogCard} from './CatalogCard';



export const Catalog = () => {
    const {photos}= useContext(PhotoContext);

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