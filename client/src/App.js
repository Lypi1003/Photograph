import { Header } from "./components/Header";
import './App.css';
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";
import { Register } from "./components/Register";
import { Login } from "./components/Login";


function App() {
  return (
    <div >

      <Header />

      <main>

          <Catalog/>

          <Register/>

          <Login/>

      </main>

      <Footer />
    </div>
  );
}

export default App;
