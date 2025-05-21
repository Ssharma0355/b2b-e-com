import { ShoppingCart } from 'lucide-react';

const CartIcon = ({ count }) => {
    return (
        <div className="cart-icon">
            <ShoppingCart size={20} />
            {count > 0 && <span className="cart-count">{count}</span>}
        </div>
    );
};

export default CartIcon;