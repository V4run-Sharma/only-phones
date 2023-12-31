import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Categories from "./components/Categories";
import BudgetPhones from "./components/BudgetPhones";
import MidRangePhones from "./components/MidRangePhones";
import FlagshipPhones from "./components/FlagshipPhones";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        {/* Wrapping content in a Router. Below is the syntax for routing */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/budget" element={<BudgetPhones />} />
          <Route path="/midrange" element={<MidRangePhones />} />
          <Route path="/flagship" element={<FlagshipPhones />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
