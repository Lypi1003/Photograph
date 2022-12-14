import { useContext } from 'react';

import { PhotoContext } from '../contexts/PhotoContext';
import * as photoService from '../services/photoService';

export const NewPost = () => {
    const {newPostHandler}= useContext(PhotoContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const photoData = Object.fromEntries(new FormData(e.target));
       
        photoService.create(photoData)
            .then(result => {
                newPostHandler(result);
            });
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <h1>New Post</h1>
                <p>Please fill in this form to create an new post.</p>
                <label htmlFor="title"><b>Title</b></label>
                <input type="text" placeholder="Enter Name" name="title" id="title" required />

                <label htmlFor="imgUrl"><b>Image URL</b></label>
                <input type="text" placeholder="Image URL" name="imgUrl" id="imgUrl" required />

                <label htmlFor="category"><b>Category</b></label>
                <select id="category" name="category">
                    <option value="nature">Nature</option>
                    <option value="persons">Persons</option>
                    <option value="vechicle">Vechicles</option>
                    <option value="cities">Cities</option>
                    <option value="animals">Animals</option>
                    <option value="random">Random</option>
                </select>

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>

                <input type="submit" class="btn" value="Create"></input>

            </form>
        </div>
    );
}