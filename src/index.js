import './style.css';
import loadFoodDetails from './modules/populatePopupWindow.js';
// import { addComment } from './modules/comments.js'
// import populateMeal from './modules/populate.js';
// let food_ID = '';

// window.addEventListener('load', () => {
//   populateMeal();
// });

const openPopupWindow = async (foodId) => {
  await loadFoodDetails(foodId);
  document.body.style.overflowY = 'hidden';
  document.querySelector('#popup').style.display = 'block';
  // food_ID = foodId;
};

window.openPopupWindow = openPopupWindow;

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
