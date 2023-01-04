import { getLikes } from './getLikes.js';

const showlike = async (txtLike) => {
  const mealId = txtLike.getAttribute('data-id');
  const likesList = await getLikes();
  const numberLikes = likesList.filter((likeObj) => likeObj.item_id === mealId);
  if (numberLikes.length > 0) {
    txtLike.textContent = `${numberLikes[0].likes} Likes`;
  }
};

export default showlike;