import { Routes, Route } from 'react-router-dom'

import { Header } from "./components/Header";
import './App.css';
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from './components/Home';
import { NewPost } from './components/NewPost';


function App() {
	return (
		<div >

			<Header />

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/catalog" element={<Catalog />} />
					<Route path="/catalog/create" element={<NewPost />} />

				</Routes>
			</main>

			<Footer />

		</div>
	);
}

export default App;
