import { addBooks } from './addRemove.js';

export default window.onload = () => {
  let Books = [];
  if (localStorage.getItem('Books')) {
    Books = JSON.parse(localStorage.getItem('Books'));
  }
  addBooks(Books);
};
