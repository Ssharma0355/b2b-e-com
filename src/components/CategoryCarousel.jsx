import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div className="category-carousel">
            <h2>Shop by Category</h2>
            <div className="categories">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="category-image">
                            <img
                                src={`https://source.unsplash.com/random/200x200/?${category}`}
                                alt={category}
                            />
                        </div>
                        <h3>{category}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryCarousel;