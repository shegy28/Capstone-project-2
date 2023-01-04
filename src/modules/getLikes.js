const createLikes = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/likes');
  const result = await response.json();
  return result;
};

export { createLikes, getLikes };