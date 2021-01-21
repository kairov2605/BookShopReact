import { combineReducers } from 'redux';

import bookReducer from './Book/book-reducer';

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
