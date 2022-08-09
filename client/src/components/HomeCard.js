import {Link} from 'react-router-dom';

export const HomeCard = ({
    photo
}) => {
    return(
        
        <div className="card" >
            <p>
                <img src={photo.imgUrl} alt="" style={{ width: "100%" }} />
            </p>
            <h1>{photo.title}</h1>
            <h2>Category: {photo.category}</h2>
            <div className="btn">
                <Link to="/details"> Details </Link>
            </div>
        </div >
    );
}