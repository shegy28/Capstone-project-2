const LikeAPI  = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/likes';

const createLikes = async (id) => {
  await fetch(LikeAPI, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
    }),
  });
};

const getLikes = async () => {
  const response = await fetch(LikeAPI);
  const result = await response.json();
  return result;
};

export { createLikes, getLikes };