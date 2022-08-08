

export const Header = () => {
    return (

        <div className="header">

            <h1 id="main">Photograph</h1>
            <div className="search-container">
                <form >
                    <input type="text" placeholder="Search.." name="search"/>
                        <button type="submit"><i>Submit</i></button>
                </form>
            </div>

            <nav id="navbar">
                <ul>


                    <li><a href="/catalog">Catalog</a></li>

                    <li><a href="/catalog/create">New Post</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/auth/logout">Logout</a></li>

                    <li><a href="/auth/login">Login</a></li>
                    <li><a href="/auth/register">Register</a></li>
                </ul>
            </nav>
        </div>

    );
}