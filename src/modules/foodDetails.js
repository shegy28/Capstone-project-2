const getFoodDetails = async (foodId) => {
  const requestURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const foodDetails = await response.json();
  const data = foodDetails.meals[0];
  const food = {};
  if (data !== null) {
    food.id = data.idMeal;
    food.title = data.strMeal;
    food.image = data.strMealThumb;
    food.category = data.strCategory;
    food.origin = data.strArea;
    const steps = data.strInstructions.split('\r\n');
    food.steps = steps;
    const ingredients = [];
    const measure = [];

    Object.keys(data).forEach((key) => {
      if (data[key] !== null && data[key] !== '') {
        if (key.includes('strIngredient')) {
          ingredients.push(data[key]);
        }
        if (key.includes('strMeasure')) {
          measure.push(data[key]);
        }
      }
    });
    const newIngredients = ingredients.map((element, index) => `${measure[index]} ${element}`);
    food.ingredients = newIngredients;
  }
  return food;
};

const fillList = (arr, list) => {
  list.innerHTML = ''; 
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '' && arr[i] !== null) {
      const item = arr[i];
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    }
  }
}

const loadIngredients = (arrIngredients, parentElement) => {
  const div = document.createElement('div');
  div.classList.add('recipe');
  const h3 = document.createElement('h3');
  h3.innerText = 'Ingredients';
  div.appendChild(h3);
  const ul = document.createElement('ul');
  fillList (arrIngredients, ul);
  div.appendChild(ul);
  parentElement.appendChild(div);
}

const loadInstructions = (arrInstructions, parentElement) => {
  const div = document.createElement('div');
  div.classList.add('recipe');
  const h3 = document.createElement('h3');
  h3.innerText = 'Instructions';
  div.appendChild(h3);
  const ol = document.createElement('ol');
  fillList(arrInstructions, ol);
  div.appendChild(ol);
  parentElement.appendChild(div);
}

const loadImage = (objFood, parentElement) => {
  const img = document.createElement('img');
  img.id = 'food-image';
  img.setAttribute('src', objFood.image);
  img.setAttribute('alt', objFood.title);
  parentElement.appendChild(img);
}

const loadTitle = (objFood, parentElement) => {
  const title = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.classList.add('title');
  h1.innerText = objFood.title;
  title.appendChild(h1);
  parentElement.appendChild(title);
}

const loadIntroduction = (objFood, parentElement) => {
  const div = document.createElement('div');
  div.classList.add('div');
  const h21 = document.createElement('h3');
  h21.innerHTML = `Category : <span style="color: blue">${objFood.category}</span>`;
  const h22 = document.createElement('h3');
  h22.innerHTML = `Origin : <span style="color: blue">${objFood.origin}</span>`;
  div.appendChild(h21);
  div.appendChild(h22);
  parentElement.appendChild(div);
}

const loadRecipe = (objFood, parentElement) => {
  const recipeDiv = document.createElement('div');
  recipeDiv.id = 'recipe-info';
  loadIngredients(objFood.ingredients,recipeDiv);
  loadInstructions(objFood.steps, recipeDiv);
  parentElement.appendChild(recipeDiv);
}

export function foodDetailsElement(food) {
  const detailsDiv = document.createElement('div');
  loadImage(food, detailsDiv);
  loadTitle(food, detailsDiv);
  loadIntroduction(food, detailsDiv);
  loadRecipe(food, detailsDiv);

  return detailsDiv;
}

export default getFoodDetails;