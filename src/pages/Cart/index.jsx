import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

import './Cart.scss';
import { connect } from 'react-redux';

function Cart({ cart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
      <div className="cartHead">
        <h4 className="cartHead__title">Название книги</h4>
        <h4 className="cartHead__quantity">Количество</h4>
        <div className="cartHead__price">Цена</div>
      </div>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <div className="cart__info">
          <h2>Количество книг : {totalPrice}</h2>
          <h2>Сумма : {totalItems}</h2>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.book.cart,
  };
};

export default connect(mapStateToProps)(Cart);
