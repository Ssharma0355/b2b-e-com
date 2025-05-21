import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import LoadingSpinner from './LoadingSpinner';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setProducts([
                    {
                        id: 1,
                        title: 'Fallback Product 1',
                        price: 19.99,
                        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                    },
                    {
                        id: 2,
                        title: 'Fallback Product 2',
                        price: 29.99,
                        image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="product-list">
            <h2 className='text-2xl font-semibold mb-4'>Popular Products</h2>
            <div className="products">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;