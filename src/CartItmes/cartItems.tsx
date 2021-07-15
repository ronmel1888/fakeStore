import { Button } from "@material-ui/core";
//types
import { CartItemType } from "../App";
// import Item from "../item/Item";
import { Wrapper } from "../item/Item.styles";
//Styles
// import { Wrapper } from "../CartItmes/cartItems.style";
type Props ={
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}


const CartItem: React.FC<Props> = ({item,addToCart,removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>

            <div className="information">
                <p>price: ${item.price}</p>
                <p>total: ${(item.amount * item.price).toFixed(2)}</p>
                <img src={item.image} alt={item.title} />
            <div className="buttons">
                <Button
                    size="small"
                disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}>
                    -
                </Button>
                <br />
                <p>{item.amount}</p>
                <Button
                    size="small"
                disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)}>
                    +
                </Button>
            </div>
        </div>
            </div>

    </Wrapper>
);
    



export default CartItem