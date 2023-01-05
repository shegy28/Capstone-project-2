import getFoodDetails, { foodDetailsElement } from './foodDetails.js';
import closeIcon from '../images/close_menu.png';
import getComments, { commentsElement } from './comments.js';
import addFormElement from './addComment.js'

function topElement() {
  const div = document.createElement('div');
  div.classList.add('close');
  const h1 = document.createElement('h1');
  div.appendChild(h1);
  const a = document.createElement('a');
  a.id = 'close';
  a.setAttribute('href', '#');
  const img = document.createElement('img');
  img.setAttribute('src', closeIcon);
  img.setAttribute('alt', 'Close');
  a.appendChild(img);
  div.appendChild(a);
  a.addEventListener('click', () => {
    document.body.style.overflowY = 'scroll';
    document.querySelector('#popup').classList.add('close_popup');
  });
  return div;
}

const loadElements = async (foodId) => {
  document.querySelector('.main').innerHTML = '';
  const food = await getFoodDetails(foodId);
  const comments = await getComments(foodId);
  const popupDiv = document.createElement('div');
  popupDiv.id = 'popup';
  popupDiv.classList.add('popup');
  popupDiv.appendChild(topElement(food.title));
  const foodDescription = document.createElement('div');
  foodDescription.classList.add('description');
  foodDescription.appendChild(foodDetailsElement(food));
  foodDescription.appendChild(commentsElement(comments));
  foodDescription.appendChild(addFormElement(foodId));
  popupDiv.appendChild(foodDescription);
  document.querySelector('.main').appendChild(popupDiv);
};

export default loadElements;