import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  const cartItemsList = cartItems.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        item={{
          title: item.name,
          quantity: item.quantity,
          total: item.totalPrice,
          price: item.price,
        }}
      />
    );
  });

  return (
    <>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>{cartItemsList}</ul>
      </Card>
    </>
  );
};

export default Cart;
