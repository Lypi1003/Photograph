import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

export const Header = () => {
    const { user } = useContext(AuthContext)
    return (

        <header>

            <h1>
                <Link className="home" to="/">
                    Photograph
                </Link>
            </h1>

            <nav>

                {user.email && <span>Welcome,{user.email}</span>}

                <Link to="/catalog">Catalog</Link>

                {user.accessToken
                    ? <div id="user">
                        <Link to="/create">New Post</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }

            </nav>
        </header>

    );
}