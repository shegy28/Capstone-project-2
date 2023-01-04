import getFoodDetails from './foodDetails.js';
import closeIcon from '../images/close_menu.png';
import getComments, { addComment } from './comments.js';

function topElement() {
  const closeDiv = document.createElement('div');
  closeDiv.classList.add('close');
  const h1 = document.createElement('h1');
  closeDiv.appendChild(h1);
  const closeA = document.createElement('a');
  closeA.id = 'close';
  closeA.setAttribute('href', '#');
  const closeImg = document.createElement('img');
  closeImg.setAttribute('src', closeIcon);
  closeImg.setAttribute('alt', 'Close');
  closeA.appendChild(closeImg);
  closeDiv.appendChild(closeA);
  closeA.addEventListener('click', () => {
    document.querySelector('#popup').style.display = 'none';
    document.body.style.overflowY = 'scroll';
    document.querySelector('.main').innerHTML = '';
  });

  return closeDiv;
}

function foodDetailsElement(food) {
  const detailsDiv = document.createElement('div');

  const img = document.createElement('img');
  img.id = 'food-image';
  img.setAttribute('src', food.image);
  img.setAttribute('alt', food.title);
  detailsDiv.appendChild(img);
  const title = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerText = food.title;
  title.appendChild(h1);
  detailsDiv.appendChild(title);
  const div = document.createElement('div');
  div.classList.add('div');

  const h21 = document.createElement('h3');
  h21.innerHTML = `Category : <span style="color: blue">${food.category}</span>`;
  const h22 = document.createElement('h3');
  h22.innerHTML = `Origin : <span style="color: blue">${food.origin}</span>`;
  div.appendChild(h21);
  div.appendChild(h22);
  detailsDiv.appendChild(div);

  const recipeDiv = document.createElement('div');
  recipeDiv.id = 'recipe-info';

  const ingredients = document.createElement('div');
  ingredients.classList.add('recipe');

  const h31 = document.createElement('h3');
  h31.innerText = 'Ingredients';
  ingredients.appendChild(h31);

  const ul1 = document.createElement('ul');

  for (let i = 0; i < food.ingredients.length; i += 1) {
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
  for (let i = 0; i < food.steps.length; i += 1) {
    if (food.steps[i] !== '' && food.steps[i] !== null) {
      const item = food.steps[i];
      const li = document.createElement('li');
      li.textContent = item;
      ol1.appendChild(li);
    }
  }

  steps.appendChild(ol1);
  recipeDiv.appendChild(steps);
  detailsDiv.appendChild(recipeDiv);

  return detailsDiv;
}

function commentsElement(comments) {
  const commentsDiv = document.createElement('div');
  const h23 = document.createElement('h2');
  h23.id = 'comments-title';
  if (comments === null || comments.length === undefined) {
    h23.innerText = 'Comments (0)';
  } else {
    h23.innerText = `Comments (${comments.length})`;
  }
  commentsDiv.appendChild(h23);

  const ul2 = document.createElement('ul');
  ul2.id = 'comments-list';
  for (let i = 0; i < comments.length; i += 1) {
    const item = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
    const li = document.createElement('li');
    li.textContent = item;
    ul2.appendChild(li);
  }
  commentsDiv.appendChild(ul2);
  return commentsDiv;
}

function addCommentElement(foodId) {
  const form = document.createElement('form');
  form.id = 'add-comment';
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
  const userComment = document.createElement('input');
  userComment.id = 'comment';
  userComment.type = 'text';
  userComment.name = 'comment';
  userComment.placeholder = 'Your insights';
  userComment.required = true;

  form.appendChild(userComment);
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.id = 'submit';
  submit.value = 'Comment';

  form.appendChild(submit);

  const clearForm = async () => {
    form.elements.username.value = '';
    form.elements.comment.value = '';
  };

  async function fillCommentsList(comments, ul2) {
    ul2.innerHTML = '';
    for (let i = 0; i < comments.length; i += 1) {
      const item = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
      const li = document.createElement('li');
      li.textContent = item;
      ul2.appendChild(li);
    }
    document.querySelector('#comments-title').innerText = `Comments (${comments.length})`;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const comments = {};
    comments.item_id = foodId;
    comments.username = form.elements.username.value;
    comments.comment = form.elements.comment.value;
    const list = document.querySelector('#comments-list');
    addComment(comments)
      .then(async (data) => {
        if (data === 201) {
          const newComments = await getComments(foodId);
          fillCommentsList(newComments, list);
          clearForm();
        }
      });
  });
  return form;
}

const loadFoodDetails = async (foodId) => {
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
  foodDescription.appendChild(addCommentElement(foodId));
  popupDiv.appendChild(foodDescription);
  document.querySelector('.main').appendChild(popupDiv);
};

export default loadFoodDetails;