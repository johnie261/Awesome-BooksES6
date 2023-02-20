import { addBooks, deleteBk } from './addRemove.js';
import AwesomeBook from './constructor.js';

const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const addBookBtn = document.querySelector('#addBookBtn');

const Books = [];

addBookBtn.addEventListener('click', (e) => {
  if (bookTitle.value === '' || bookAuthor.value === '') {
    e.preventDefault();
  } else {
    const bookItems = new AwesomeBook(bookTitle.value, bookAuthor.value);
    Books.push(bookItems);
    addBooks(Books);
    localStorage.setItem('Books', JSON.stringify(Books));
  }
});

document.querySelector('.bookLibrary').addEventListener('click', (e) => {
  Books.splice(e.target.id, 1);
  localStorage.setItem('Books', JSON.stringify(Books));
  deleteBk(e.target);
});