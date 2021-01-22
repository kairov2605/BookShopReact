import * as actionTypes from './book-types';

const INITIAL_STATE = {
  books: [
    {
      id: 0,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Анна Каренина',
      price: 1100,
    },
    {
      id: 1,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Автостопом по галактике',
      price: 8000,
    },
    {
      id: 2,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Алиса в Стране чудес',
      price: 700,
    },
    {
      id: 3,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Алхимик',
      price: 2500,
    },
    {
      id: 4,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Американский психопат',
      price: 4990,
    },
    {
      id: 5,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Аня из Зеленых Мезонинов',
      price: 5700,
    },
    {
      id: 6,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Ангус, ремни и конкретные обжимашки',
      price: 1250,
    },
    {
      id: 7,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Артемис Фаул',
      price: 4356,
    },
    {
      id: 8,
      imageUrl: 'https://source.unsplash.com/random',
      name: 'БДВ, или Большой и добрый великан',
      price: 789,
    },
  ],
  cart: [],
  currentItem: null,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.books.find((book) => book.id === action.payload.id);

      const inCart = state.cart.find((item) => (item.id === action.payload.id ? true : false));
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item,
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
