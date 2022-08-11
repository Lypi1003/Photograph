import { Routes, Route } from 'react-router-dom';

import {AuthContext} from './contexts/AuthContext'

import { Header } from "./components/Header";
import './App.css';
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from './components/Home';
import { NewPost } from './components/NewPost';
import { DetailsCard } from './components/DetailsCard';
import { useState } from 'react';


function App() {
	const [auth,setAuth] = useState({});

	const loginHandler =(authData) =>{
		setAuth(authData);
	}

	return (
		<AuthContext.Provider value={{auth, loginHandler}}>

		<div >

			<Header />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/create" element={<NewPost />} />
					<Route path="/catalog/:photoId" element={<DetailsCard/>} />

				</Routes>
			</main>

			<Footer />

		</div>
		</AuthContext.Provider>
	);
}

export default App;
