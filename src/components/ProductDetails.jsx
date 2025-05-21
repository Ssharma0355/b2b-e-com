import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import LoadingSpinner from './LoadingSpinner';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await res.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        dispatch(addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        }));
    };

    if (!product) return <LoadingSpinner />;

    return (
        <>
            <button
                onClick={() => navigate('/')}
                className="back-button"
                style={{
                    marginBottom: '1rem',
                    marginLeft:'1rem',
                    marginTop:'1rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                ← Back to Home
            </button>
            <div className="product-detail-container">

                <div className="product-detail-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-detail-info">
                    <h2>{product.title}</h2>
                    <p className="category"><strong>Category:</strong> {product.category}</p>
                    <p className="description">{product.description}</p>
                    <p className="price"><strong>Price:</strong> ${product.price}</p>
                    <p className="rating"><strong>Rating:</strong> ⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
                    <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </>
    
    );
};

export default ProductDetails;
