import './style.css';
import loadFoodDetails from './modules/populatePopupWindow.js';
// import { addComment } from './modules/comments.js'
import populateMeal from './modules/populate.js';
import { createLikes } from './modules/getLikes';
import showlike from './modules/showLike';
// let food_ID = '';

// window.addEventListener('load', async() => {
//   await populateMeal();

// });

document.addEventListener('DOMContentLoaded', async () => {
    await populateMeal();
    const textLikes = document.querySelectorAll('.like-counter');
    textLikes.forEach(async (textLike) => {
    await showlike(textLike);
    });
});

window.addEventListener('click', async (e) => {
    const likeBtn = e.target;
    if (likeBtn.classList.contains('card-likes')) {
      const mealId = likeBtn.getAttribute('data-id');
      console.log(mealId);
      await createLikes(mealId);
      const txtlike = likeBtn.parentElement.nextElementSibling.firstElementChild;
      await showlike(txtlike);
    }
});

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
