import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart_slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(cartActions.removeItemFromCart(id))}>
            -
          </button>
          <button
            onClick={() =>
              dispatch(
                cartActions.incraseItemQtyFromCart({
                  id,
                  title,
                  price,
                  quantity: 1,
                })
              )
            }
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
