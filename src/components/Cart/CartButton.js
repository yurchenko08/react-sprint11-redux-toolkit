import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui_slice";
import { addToCart } from "../../store/cart_slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartTotalQty = useSelector(addToCart);

  return (
    <button
      onClick={() => dispatch(uiActions.toggle())}
      className={classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQty.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
