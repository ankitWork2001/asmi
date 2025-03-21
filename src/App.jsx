import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Footbanner from "./Components/Footbanner";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Categories from "./Components/Categories";
import CategoryDetails from "./Components/CategoryDetails";
import TopStores from "./Components/TopStores";
import FilteredOffersPage from "./Components/FilteredOffersPage";
import CategoryOffersPage from "./Components/CategoryOffersPage";
import Offers from "./Components/Offers";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/top-stores" element={<TopStores />} />
        <Route path="/category/:id" element={<CategoryDetails />} />
        <Route path="/category-details/:id/:brand?" element={<CategoryDetails />} />
        <Route path="/filtered-offers/:categoryId" element={<FilteredOffersPage />} />
        <Route path="/category-offers/:categoryName" element={<CategoryOffersPage />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
      <Footer />
      <Footbanner />
    </>
  );
}

export default App;
