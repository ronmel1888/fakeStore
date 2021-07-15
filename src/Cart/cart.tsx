import CartItem from '../CartItmes/cartItems';
import { Wrapper } from './cart.style';
import { CartItemType } from '../App';
import React from 'react';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItems: CartItemType) => void;
    removeFromCart: (id: number) => void
};
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    
    return (
        <Wrapper>
            <h2> Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p> No Items In Cart</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                
                />
            ))}

        </Wrapper>
        )
        
}
export default Cart;