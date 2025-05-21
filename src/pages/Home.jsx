import CategoryCarousel from '../components/CategoryCarousel';
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <div className="home-page">
            <CategoryCarousel />
            <ProductList />
        </div>
    );
};

export default Home;