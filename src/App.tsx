import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layouts/Layout";
import DetailPage from "./pages/DetailPage/DetailPage";
import ProductListPage from "./pages/ProductListPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="products" element={<ProductListPage />} />
      </Route>
    </Routes>
  );
}

export default App;
