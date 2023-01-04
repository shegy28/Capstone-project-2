import { getFoodDetails } from './foodDetails.js';
import closeIcon from '../images/close_menu.png';
import { getComments } from './comments.js';
// const loadComments = async (foodId) => {
//   const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(obj),
//   };
//   const response = await fetch(url, options);
//   const data = await response.json();
//   return data;
// }; 

export const loadFoodDetails = async (foodId) => {
  const food = await getFoodDetails(foodId);
  const comments = await getComments(foodId);

  const popupDiv = document.createElement('div');
  popupDiv.id = 'popup';
  popupDiv.classList.add('popup');

  const closeDiv = document.createElement('div');
  closeDiv.classList.add('close');

  const h1 = document.createElement('h1');
  h1.innerText = food.title;
  closeDiv.appendChild(h1);

  const closeA = document.createElement('a');
  closeA.id = 'close';
  closeA.setAttribute('href', '#');

  const closeImg = document.createElement('img');

  closeImg.setAttribute('src', closeIcon);
  closeImg.setAttribute('alt','Close');
  closeA.appendChild(closeImg);
  closeDiv.appendChild(closeA);
  popupDiv.appendChild(closeDiv);

  const foodDescription = document.createElement('div');
  foodDescription.classList.add('description')

  const img = document.createElement('img');
  img.id = 'food-image';
  img.setAttribute('src', food.image);
  img.setAttribute('alt', food.title);
  foodDescription.appendChild(img);

  const div = document.createElement('div');
  div.classList.add('div');

  const h21 = document.createElement('h2');
  h21.innerText = 'Category : ' + food.category;
  const h22 = document.createElement('h2');
  h22.innerText = 'Origin : ' + food.origin;
  div.appendChild(h21);
  div.appendChild(h22);
  foodDescription.appendChild(div);

  const recipeDiv = document.createElement('div');
  recipeDiv.id = 'recipe-info';

  const ingredients = document.createElement('div');
  ingredients.classList.add('recipe');

  const h31 = document.createElement('h3');
  h31.innerText = 'Ingredients';
  ingredients.appendChild(h31);

  const ul1 = document.createElement('ul');

  for (let i = 0; i < food.ingredients.length; i++) {
    const item = food.ingredients[i];
    const li = document.createElement('li');
    li.textContent = item;
    ul1.appendChild(li);
  }

  ingredients.appendChild(ul1);
  recipeDiv.appendChild(ingredients);

  const steps = document.createElement('div');
  steps.classList.add('recipe');

  const h32 = document.createElement('h3');
  h32.innerText = 'Instructions';
  steps.appendChild(h32);

  const ol1 = document.createElement('ol');
  for (let i = 0; i < food.steps.length; i++) {
    const item = food.steps[i];
    const li = document.createElement('li');
    li.textContent = item;
    ol1.appendChild(li);
  }

  steps.appendChild(ol1);
  recipeDiv.appendChild(steps);
  foodDescription.appendChild(recipeDiv);

  const commentsDiv = document.createElement('div');
  const h23 = document.createElement('h2');
  h23.innerText = 'Comments';
  commentsDiv.appendChild(h23);

  const ul2 = document.createElement('ul');
  for (let i = 0; i < comments.length; i++) {
    const item = comments[i].creation_date + ' ' + comments[i].username + ': ' + comments[i].comment ;
    const li = document.createElement('li');
    li.textContent = item;
    ul2.appendChild(li);
  }
  commentsDiv.appendChild(ul2);
  foodDescription.appendChild(commentsDiv);
  
  const form = document.createElement('form');
  form.id = 'form';
  const h24 = document.createElement('h2');
  h24.innerText = 'Add a comment';
  form.appendChild(h24);

  const userName = document.createElement('input');
  userName.id = 'username';
  userName.name = 'username';
  userName.type = 'text';
  userName.placeholder = 'Your name';
  userName.required = true;

  form.appendChild(userName);
  const userComment = document.createElement('textarea');
  userComment.id = 'comment';
  userComment.name = 'comment';
  userComment.placeholder = 'Your insights';
  userComment.required = true;

  form.appendChild(userComment);
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.id = 'submit';
  submit.value = 'Comment';

  form.appendChild(submit);

  foodDescription.appendChild(form);
  popupDiv.appendChild(foodDescription);
  document.querySelector('.main').appendChild(popupDiv);

  closeA.addEventListener('click', function() {
    document.querySelector('#popup').style.display = 'none';
    document.body.style.overflowY = 'scroll';
  });
};