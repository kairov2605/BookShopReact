import React, { useEffect, useState } from 'react';
import { Book } from '../../components';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.scss';

import { connect } from 'react-redux';

function Home({ books }) {
  return (
    <div className="both">
      <Link to="/cart">
        <Button className="cart-button">Корзина</Button>
      </Link>
      <div className="home">
        {books.map((book) => (
          <Book key={book.id} bookData={book} />
        ))}
      </div>

      {/* <div className="home">{items && items.map((obj) => <Book key={obj.id} {...obj} />)}</div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.book.books,
  };
};

export default connect(mapStateToProps)(Home);
