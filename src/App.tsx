import "./App.css";
import { Nav } from "react-bootstrap";
import Modal from "./components/Modal";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  const title = ["Home", "About", "Shop", "Contact"];
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Header title={title} />
      <Modal />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
