const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookList = document.querySelector('#bookList');

export const addBooks = (Books) => {
  bookList.innerHTML = '';
  for (let i = 0; i < Books.length; i += 1) {
    bookList.innerHTML += `
          <div class='library'>
            <p class='Title'>'${Books[i].title}' by  ${Books[i].author}</p>
            <button class='removeBook' id="${i}">Remove</button>
          </div>
        `;

    bookTitle.value = '';
    bookAuthor.value = '';
  }
};

export const deleteBk = (el) => {
  if (el.classList.contains('removeBook')) {
    el.parentElement.remove();
  }
};