

export const HomeCard = ({
    photo
}) => {
    return(
        
        <div className="card" >
            <p>
                <img src={photo.img} alt="photo" style={{ width: "100%" }} />
            </p>
            <h1>{photo.title}</h1>
            <h2>Category: {photo.category}</h2>
            <div className="btn">
                <a href="#"> Details </a>
            </div>
        </div >
    );
}