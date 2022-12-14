import React from "react";
import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from '../../store/cart-context';
import CartIcon from "../cart/CartIcon";

const HeaderCartButton = (props) => {

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  //console.log(cartCtx.items, cartCtx)

  const {items} = cartCtx;

  const numberOfCartItemsTotal = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClickCartIcon}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {numberOfCartItemsTotal} </span>
    </button>
  );
};

export default HeaderCartButton;
