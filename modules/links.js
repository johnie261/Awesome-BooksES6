const listPage = document.querySelector('.list');
const addPage = document.querySelector('.add');
const contactPage = document.querySelector('.contact');

listPage.addEventListener('click', () => {
  document.querySelector('.bookLibrary').style.display = 'block';
  document.querySelector('.bookForm').style.display = 'none';
  document.querySelector('.contactInfo').style.display = 'none';
});
addPage.addEventListener('click', () => {
  document.querySelector('.bookLibrary').style.display = 'none';
  document.querySelector('.bookForm').style.display = 'block';
  document.querySelector('.contactInfo').style.display = 'none';
});
contactPage.addEventListener('click', () => {
  document.querySelector('.bookLibrary').style.display = 'none';
  document.querySelector('.bookForm').style.display = 'none';
  document.querySelector('.contactInfo').style.display = 'block';
});