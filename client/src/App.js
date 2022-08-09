import { Header } from "./components/Header";
import './App.css';
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { NewPost } from "./components/NewPost";
import {Home} from "./components/Home";

function App() {
  return (
    <div >

      <Header />

      <main>
          <Home/>

          <Catalog/>

          <Register/>

          <Login/>

          <NewPost/>

      </main>

      <Footer />

    </div>
  );
}

export default App;
