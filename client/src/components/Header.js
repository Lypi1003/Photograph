import { Link } from 'react-router-dom';

export const Header = () => {
    return (

        <header>

            <h1>
                <Link className="home" to="/">
                    Photograph
                </Link>
            </h1>
           
            <nav>

                <Link to="/catalog">Catalog</Link>

                <div id="user">
                    <Link to="/create">New Post</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>

            </nav>
        </header>

    );
}