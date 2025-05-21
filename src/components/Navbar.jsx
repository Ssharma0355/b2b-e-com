import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartIcon from './CartIcon';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.items);

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-pink-600">
                        Meesho
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 items-center">
                        <Link to="/" className="hover:text-pink-600">Home</Link>
                        <Link to="/categories" className="hover:text-pink-600">Categories</Link>
                        <Link to="/cart" className="relative">
                            <CartIcon count={totalItems} />
                        </Link>
                        <Link to="/profile">
                            <User size={20} />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
                    <Link to="/" className="block" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/categories" className="block" onClick={() => setIsOpen(false)}>Categories</Link>
                    <Link to="/cart" className="block" onClick={() => setIsOpen(false)}>
                        <CartIcon count={totalItems} />
                    </Link>
                    <Link to="/profile" className="block" onClick={() => setIsOpen(false)}>
                        <User size={20} />
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
