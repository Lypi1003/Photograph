import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as photoService from '../services/photoService';

import { PhotoContext } from "../contexts/PhotoContext";

export const EditPhoto = () => {
    const [currentPhoto, setCurrentPhoto] = useState({});
    const {photoEdit} = useContext(PhotoContext);
    const { photoId } = useParams();
    const navigate = useNavigate();

    const categories = [
        { label: "nature", value: "Nature" },
        { label: "persons", value: "Persons" },
        { label: "vechicle", value: "Vechicle" },
        { label: "cities", value: "Cities" },
        { label: "animals", value: "Animals" },
        { label: "random", value: "Random" },
    ]

    useEffect(() => {
        photoService.getOne(photoId)
            .then(photoData => {
                setCurrentPhoto(photoData);
            })
    })

    const onSubmit=(e)=>{
        e.preventDefault();
        const photoData = Object.fromEntries(new FormData(e.target));
       
        photoService.edit(photoId,photoData)
            .then(result => {
                photoEdit(photoId,result);
                navigate(`/catalog/${photoId}/details`)
            });
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <h1>Edit Post</h1>
               
                <label htmlFor="title"><b>Title</b></label>
                <input type="text" placeholder="Enter Name" name="title" id="title" defaultValue={currentPhoto.title} />

                <label htmlFor="imgUrl"><b>Image URL</b></label>
                <input type="text" placeholder="Image URL" name="imgUrl" id="imgUrl" defaultValue={currentPhoto.imgUrl} />

                <label htmlFor="category"><b>Category</b></label>
                <select id="category" name="category">
                   {categories.map((category) => <option value={category.value}>{category.label}</option>)}
                </select>

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" defaultValue={currentPhoto.description}/>

                <input type="submit" class="btn" value="Edit"></input>

            </form>
        </div>
    );
}