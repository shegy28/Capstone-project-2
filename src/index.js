import './style.css';
import loadFoodDetails from './modules/populatePopupWindow.js';
import populateMeal from './modules/populate.js';

window.addEventListener('load', () => {
  populateMeal();
});

const openPopupWindow = async (foodId) => {
  await loadFoodDetails(foodId);
  document.body.style.overflowY = 'hidden';
  document.querySelector('#popup').style.display = 'block';
};

window.openPopupWindow = openPopupWindow;
