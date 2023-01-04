const getComments = async (foodId) => {
  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments?item_id=${foodId}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const comments = await response.json();
  return comments;
};

export const addComment = async (comment) => {
  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  };
  const response = await fetch(URL, options);
  return response.status;
};

export default getComments;