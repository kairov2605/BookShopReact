import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import heartSvg from '../../assets/img/heart.svg';
import heartRedSvg from '../../assets/img/heart-red.svg';
import viewSvg from '../../assets/img/view.svg';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/Book/book-actions';

import './Book.scss';

function Book({ bookData, addToCart }) {
  const [like, setLike] = useState(true);

  return (
    <div className="book-block">
      <img className="book-block__image" src={bookData.imageUrl} alt="Картинка Книги" />
      <h4 className="book-block__title">{bookData.name}</h4>
      <div className="book-block__price">{bookData.price} тг</div>
      <div className="book-block__bottom">
        <Button onClick={() => addToCart(bookData.id)} className="book-block__button">
          В корзину
        </Button>
        <div className="book-block__icons">
          {like ? (
            <img onClick={() => setLike((like) => !like)} src={heartSvg} alt="viewSvg" />
          ) : (
            <img onClick={() => setLike((like) => !like)} src={heartRedSvg} alt="viewSvg" />
          )}

          <img src={viewSvg} alt="viewSvg" />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Book);
