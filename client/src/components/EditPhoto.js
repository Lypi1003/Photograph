import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as photoService from '../services/photoService';

import { PhotoContext } from "../contexts/PhotoContext";

export const EditPhoto =()=>{
    const [currentPhoto, setCurrentPhoto] = useState({});
    const {} = useContext(PhotoContext);
    const {photoId} = useParams();

    useEffect(()=>{
        photoService.getOne(photoId)
        .then(photoData => {
            setCurrentPhoto(photoData);
        })
    })
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <h1>New Post</h1>
                <p>Please fill in this form to create an new post.</p>
                <label htmlFor="title"><b>Title</b></label>
                <input type="text" placeholder="Enter Name" name="title" id="title" defaultValue={currentPhoto.title} />

                <label htmlFor="imgUrl"><b>Image URL</b></label>
                <input type="text" placeholder="Image URL" name="imgUrl" id="imgUrl" defaultValue={currentPhoto.imgUrl} />

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