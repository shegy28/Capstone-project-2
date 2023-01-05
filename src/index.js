import './style.css';
import loadElements from './modules/populatePopupWindow.js';
import populateMeal from './modules/populate.js';

import { createLikes } from './modules/getLikes.js';
import showlike from './modules/showLike.js';

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
    await createLikes(mealId);
    const txtlike = likeBtn.parentElement.nextElementSibling.firstElementChild;
    await showlike(txtlike);
  }
});

const openPopupWindow = async (foodId) => {
  await loadElements(foodId);
  document.querySelector('#popup').style.display = 'block';
  document.body.style.overflowY = 'hidden';
};

window.openPopupWindow = openPopupWindow;
