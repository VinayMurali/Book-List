import { combineReducers } from "redux";
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,//key is books and value is BooksReducer i.e value retuned from reducer_books
  activeBook:ActiveBook
});

export default rootReducer;
