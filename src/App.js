import { Home, Cart } from './pages';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
//TODO:Сделать нормальный вид отображения книг +++
//TODO:Кнопка корзины +++
//TODO:Сделать страницу корзины
//TODO:Разобраться в Редаксе
//TODO:При добавление книги , отображался в корзине
//TODO:Выводилось общая сумма книг
//TODO:При нажатии купить , появлядась форма закупки
//TODO:Добавить сортировку по популярности ,алфавиту , цене
//TODO:Разбиение на категории

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/db.json';
    axios.get(apiUrl).then(({ data }) => {
      console.log(data);
      setBooks(data.books);
    });
  }, []);
  return (
    <div className="wrapper">
      <Route path="/" render={() => <Home items={books} />} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
