import { getFoodList,URL } from "./fetchApi.js";
// Using getFoodItems function //
const getMeals= async () => {
  // create an empty array
  const meals = [];
  // await api data
  const foodList = await getFoodList(URL);
  // loop to get individual data and populate important data to our array
  foodList.forEach((food) => {
    const foodObj = {
      id: food.idMeal,
      name: food.strMeal,
      image: food.strMealThumb,
      category: food.strCategory,
      origin: food.strArea,
      cookinginstruction: food.strInstructions,
    };
    meals.push(foodObj);
  });
  return meals;
};

export default getMeals;