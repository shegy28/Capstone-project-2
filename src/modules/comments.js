import countComments from './countComments.js';

const getComments = async (foodId) => {
  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments?item_id=${foodId}`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const comments = await response.json();
  return comments;
};

export const storeComment = async (comment) => {
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

export const fillCommentsList = async (arrComments, ulElement) => {
  ulElement.innerHTML = '';
  for (let i = 0; i < arrComments.length; i += 1) {
    const item = `${arrComments[i].creation_date} ${arrComments[i].username}: ${arrComments[i].comment}`;
    const li = document.createElement('li');
    li.textContent = item;
    ulElement.appendChild(li);
  }
};

export function commentsElement(arrComments) {
  const commentsDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.id = 'comments-title';
  commentsDiv.appendChild(h2);
  const ul = document.createElement('ul');
  ul.id = 'comments-list';
  fillCommentsList(arrComments, ul);
  h2.innerText = `Comments (${countComments(ul)})`;
  commentsDiv.appendChild(ul);
  return commentsDiv;
}

export default getComments;