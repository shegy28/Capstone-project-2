export const getComments = async(foodId) => {
  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments?item_id=${foodId}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const comments = await response.json();
  return comments;
};

const storeComment = async (comment) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  };
  const response = await fetch(URL, options);
  const data = await response.json();
  return data;
};

export const addComment = (obj) => {
  storeComment(obj)
    .then(() => {
      getComments(obj.item_id);
    })
    .catch((error) => {
    });
};