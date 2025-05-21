import { useEffect, useState } from 'react';
import axios from 'axios';
import icons from '../assets/icons';

const CategoryCarousel = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setCategories(['electronics', 'jewelery', "men's clothing", "women's clothing"]);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-carousel p-4">
            <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
            <div className="categories grid grid-cols-2 sm:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="category-card flex flex-col items-center bg-white shadow-md rounded-lg p-4">
                        <img src={icons[index]} alt={category} className="w-16 h-16 mb-2" />
                        <h3 className="text-sm font-medium text-center capitalize">{category}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCarousel;
