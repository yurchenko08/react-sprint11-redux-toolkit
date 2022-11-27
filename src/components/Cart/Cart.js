import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { showCart } from "../../store/ui_slice";
import { addToCart } from "../../store/cart_slice";

const Cart = (props) => {
  const cartVisible = useSelector(showCart);
  const addItemToCart = useSelector(addToCart);
  const itemFormCart = addItemToCart.items;

  return cartVisible ? (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemFormCart?.map((item, index) => (
          <CartItem
            key={index}
            item={{
              id: item.id,
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              total: item.totalPrice,
            }}
          />
        ))}
      </ul>
    </Card>
  ) : null;
};

export default Cart;
