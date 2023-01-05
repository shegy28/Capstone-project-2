import './style.css';
import loadFoodDetails from './modules/populatePopupWindow.js';
import populateMeal from './modules/populate.js';

import { createLikes } from './modules/getLikes.js';
import showlike from './modules/showLike.js';
import counter from './modules/mealCounter.js';

document.addEventListener('DOMContentLoaded', async () => {
  await populateMeal();
  const textLikes = document.querySelectorAll('.like-counter');
  textLikes.forEach(async (textLike) => {
    await showlike(textLike);
  });
  const mealCounter = document.querySelector('.meal-counter');
  const count = document.querySelectorAll('.grid-item');
  counter(mealCounter, count);
});

window.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.classList.contains('card-likes')) {
    const mealId = likeBtn.getAttribute('data-id');
    await createLikes(mealId);
    const txtlike = likeBtn.parentElement.nextElementSibling.firstElementChild;
    await showlike(txtlike);
  }
});

const openPopupWindow = async (foodId) => {
  await loadFoodDetails(foodId);
  document.body.style.overflowY = 'hidden';
  document.querySelector('#popup').style.display = 'block';
};

window.openPopupWindow = openPopupWindow;
