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
    const steps = data.strInstructions.split('\n');
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

export default getFoodDetails;