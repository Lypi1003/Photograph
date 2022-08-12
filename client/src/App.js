import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext'
import { PhotoContext } from './contexts/PhotoContext';
import { useLocalStorage } from './hooks/useLocalStorage';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Home } from './components/Home';
import { NewPost } from './components/NewPost';
import { DetailsCard } from './components/DetailsCard';
import { EditPhoto } from './components/EditPhoto';
import './App.css';

import * as photoService from './services/photoService';


function App() {
	const [auth, setAuth] = useLocalStorage('auth', {});
	const [photos, setPhotos] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
        photoService.getAll()
            .then(result => {
                setPhotos(result);
            })
    }, []);

	
	const loginHandler = (authData) => {
		setAuth(authData);
	}
	const logoutHandler = () => {
		setAuth({});
	}

	const newPostHandler = (photoData) => {
		setPhotos(state => [
			...state,
			photoData
		]);

		navigate('/catalog');
	}

	const photoEdit = (photoId, photoData)=>{
		setPhotos(state=> state.map(x=>x._id === photoId ? photoData : x))
	}

	return (
		<AuthContext.Provider value={{ user: auth, loginHandler, logoutHandler }}>

			<div >

				<Header />
				<PhotoContext.Provider value ={{photos, newPostHandler, photoEdit}}>

					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="/catalog" element={<Catalog />} />
							<Route path="/create" element={<NewPost />} />
							<Route path="/catalog/:photoId/edit" element={<EditPhoto />} />
							<Route path="/catalog/:photoId/details" element={<DetailsCard />} />

						</Routes>
					</main>

				</PhotoContext.Provider>

				<Footer />

			</div>
		</AuthContext.Provider>
	);
}

export default App;
