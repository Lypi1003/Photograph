import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as photoService from '../services/photoService';
import { useParams } from "react-router-dom";

export const DetailsCard = () => {
    const [photo, setPhoto] = useState({});
    const [comment, setComment] = useState({comment: ''});
    const { photoId } = useParams();

    useEffect(() => {
        photoService.getOne(photoId)
            .then(result => {
                setPhoto(result);
            })
    });

    const addCommentHandler = (e) => {
        e.preventDefault();
        // setPhoto(state=>{
        //     const comments = photo.comments || [];
        //     comments.push(comment)
        //     return [...photo,comments];
        // })
    }

    const onChange = (e) => {
        setComment(state =>({
            ...state,
            [e.target.name] : e.target.value
        }));
    }

    return (

        <div className="card" >
            <p>
                <img src={photo.imgUrl} alt="" style={{ width: "100%" }} />
            </p>
            <h1>{photo.title}</h1>
            <h2>Category: {photo.category}</h2>
            <p>{photo.description}</p>

            <div className="btn">
                <Link to={`/catalog/${photo._id}/edit`}> Edit </Link>
                <Link to={`/catalog/${photo._id}/delete`}> Delete </Link>
            </div>

            <div>
                <h2>Comments:</h2>
                <ul>
                    {photo.comments?.map(x=>
                        
                    <li>
                        <p>{x}</p>
                    </li>
                    )}
                </ul>
            </div>

            <article>
                <label>Add new comment:</label>
                <form className="comment-form" onSubmit={addCommentHandler}>
                    <textarea 
                    name="comment"
                    onChange={onChange} 
                    value={comment.comment}
                    />
                    <input type="submit" value={"Add Comment"} />
                </form>

            </article>

        </div >
    );
}