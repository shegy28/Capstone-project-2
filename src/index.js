import './style.css';
import loadFoodDetails from './modules/populatePopupWindow.js';
// import { addComment } from './modules/comments.js'

// let food_ID = '';

const openPopupWindow = async (foodId) => {
  await loadFoodDetails(foodId);
  document.body.style.overflowY = 'hidden';
  document.querySelector('#popup').style.display = 'block';
  // food_ID = foodId;
};

window.openPopupWindow = openPopupWindow;

const container = document.querySelector('.main');
const button = document.createElement('button');
button.innerHTML = 'Click me';
button.addEventListener('click', () => {
  openPopupWindow('52767');
});
container.appendChild(button);

// const form = document.getElementById('form');

// const clearForm = () => {
//   form.elements.username.value = '';
//   form.elements.comment.value = '';
// };

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const comments = {};
//   comments.item_id = food_ID;
//   comments.username = form.elements.username.value;
//   comments.comment = form.elements.comment.value;
//   addComment(comments);
//   clearForm();
// });