export const NewPost = () => {
    return (
        <div className="container">
            <form>
            <h1>New Post</h1>
                    <p>Please fill in this form to create an new post.</p>
                <label htmlFor="title"><b>Title</b></label>
                <input type="text" placeholder="Enter Name" name="title" id="title" required />

                <label htmlFor="imgUrl"><b>Image URL</b></label>
                <input type="text" placeholder="Image URL" name="imgUrl" id="imgUrl" required />

                <label htmlFor="category"><b>Category</b></label>
                <select id="category" name="category">
                    <option value="nature">Nature</option>
                    <option value="2persons">Persons</option>
                    <option value="vechicle">Vechicles</option>
                    <option value="cities">Cities</option>
                    <option value="animals">Animals</option>
                    <option value="randon">Random</option>
                </select>

                <label htmlFor="description">Description</label>
                <textarea id="description" name="description"></textarea>

                <input type="submit" class="btn" value="Create"></input>

            </form>
        </div>
    );
}