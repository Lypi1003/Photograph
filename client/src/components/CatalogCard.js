

export const CatalogCard = ({
    photo
}) => {
    return(
        
        <div className="card" >
            <p>
                <img src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" alt="Denim" style={{ width: "100%" }} />
            </p>
            <h1>Tailored Jeans</h1>
            <h2>Category: Product</h2>
            <p>Some text about the jeans..</p>
            <p>Author: Lypi</p>
            <p><button>Like</button></p>
            <div>
                <a href="#"> Details </a>
            </div>
        </div >
    );
}