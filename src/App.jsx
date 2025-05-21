import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css'
import Navbar from './components/Navbar';
import CategoryCarousel from './components/CategoryCarousel';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import Cart from './pages/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/category' element={<CategoryCarousel />} />
          <Route path='/productlist' element={<ProductList />} />
          <Route path='/productcard' element={<ProductCard />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
