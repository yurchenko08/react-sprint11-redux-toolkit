import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Item', quantity: 3, total: 21, price: 7 }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
