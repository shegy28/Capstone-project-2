import { getFoodList, URL } from './fetchApi.js';

const getMeals = async () => {
  const mealsArr = [];
  const foodList = await getFoodList(URL);
  foodList.forEach((food) => {
    const foodObj = {
      id: food.idMeal,
      name: food.strMeal,
      image: food.strMealThumb,
      category: food.strCategory,
      origin: food.strArea,
      cookinginstruction: food.strInstructions,
    };
    mealsArr.push(foodObj);
  });
  return mealsArr;
};

export default getMeals;