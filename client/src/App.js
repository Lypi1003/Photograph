import { Header } from "./components/Header";
import './App.css';
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { NewPost } from "./components/NewPost";


function App() {
  return (
    <div >

      <Header />

      <main>

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
