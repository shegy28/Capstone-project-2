const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';

const getFoodList = async (URL) => {
  const response = await fetch(URL);
  const json = await response.json();
  const mealList = json.meals.slice(0, 12);

  return mealList;
};

export { URL, getFoodList };