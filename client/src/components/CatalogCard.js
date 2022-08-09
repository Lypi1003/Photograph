

export const CatalogCard = ({
    photo
}) => {
    return(
        
        <div className="card" >
            <p>
                <img src={photo.img} alt="Denim" style={{ width: "100%" }} />
            </p>
            <h1>{photo.title}</h1>
            <h2>Category: {photo.category}</h2>
            <p>{photo.description}</p>
            <p><button className=" btn">Like</button></p>
            <div className="btn">
                <a href="#"> Details </a>
            </div>
        </div >
    );
}