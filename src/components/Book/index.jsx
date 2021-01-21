import React from 'react';
import { Button } from 'react-bootstrap';
import heartSvg from '../../assets/img/heart.svg';
import viewSvg from '../../assets/img/view.svg';

import './Book.scss';

export default function Book({ bookData }) {
  return (
    <div className="book-block">
      <img className="book-block__image" src={bookData.imageUrl} alt="Картинка Книги" />
      <h4 className="book-block__title">{bookData.name}</h4>
      <div className="book-block__price">{bookData.price} тг</div>
      <div className="book-block__bottom">
        <Button className="book-block__button">В корзину</Button>
        <div className="book-block__icons">
          <img src={heartSvg} alt="viewSvg" />
          <img src={viewSvg} alt="viewSvg" />
        </div>
      </div>
    </div>
  );
}
