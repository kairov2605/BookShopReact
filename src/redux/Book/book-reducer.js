import * as actionTypes from './book-types';

const INITIAL_STATE = {
  books: [
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
    {
      id: 0,
      imageUrl:
        'https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      name: 'Пепперони Фреш с перцем',
      price: 803,
    },
  ],
  cart: [],
  currentItem: null,
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default bookReducer;
