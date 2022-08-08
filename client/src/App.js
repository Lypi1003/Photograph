import { Header } from "./components/Header";
import './App.css';
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";


function App() {
  return (
    <div >

      <Header />

      <main>

          <Catalog/>

      </main>

      <Footer />
    </div>
  );
}

export default App;
