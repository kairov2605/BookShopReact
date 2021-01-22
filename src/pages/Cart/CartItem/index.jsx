import React from 'react';
import { Button } from 'react-bootstrap';
import deleteItem from '../../../assets/img/rubbish.svg';
// import { connect } from 'react-redux';
// import { addToCart } from '../../redux/Book/book-actions';

import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/Book/book-actions';

import './CartItem.scss';

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={item.imageUrl} alt="Картинка Книги" />
      <h4 className="cartItem__title">{item.name}</h4>
      <h4 className="cartItem__quantity">{item.qty}</h4>
      <div className="cartItem__price">{item.price}</div>
      <button onClick={() => removeFromCart(item.id)} className="cartItem__delete"></button>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (id) => dispatch(addToCart(id)),
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
