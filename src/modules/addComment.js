import getComments, { storeComment, fillCommentsList } from './comments.js';

function addCommentElement(foodId) {
  const form = document.createElement('form');
  form.id = 'add-comment';
  const h2 = document.createElement('h2');
  h2.innerText = 'Add a comment';

  form.appendChild(h2);

  const userName = document.createElement('input');
  userName.id = 'username';
  userName.name = 'username';
  userName.type = 'text';
  userName.placeholder = 'Your name';
  userName.required = true;

  form.appendChild(userName);
  const userComment = document.createElement('input');
  userComment.id = 'comment';
  userComment.type = 'text';
  userComment.name = 'comment';
  userComment.placeholder = 'Your insights';
  userComment.required = true;

  form.appendChild(userComment);
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.id = 'submit';
  submit.value = 'Comment';

  form.appendChild(submit);

  const clearForm = async () => {
    form.elements.username.value = '';
    form.elements.comment.value = '';
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newComment = {};
    newComment.item_id = foodId;
    newComment.username = form.elements.username.value;
    newComment.comment = form.elements.comment.value;
    const ul = document.querySelector('#comments-list');
    storeComment(newComment)
      .then(async (data) => {
        if (data === 201) {
          const comments = await getComments(foodId);
          fillCommentsList(comments, ul);
          document.querySelector('#comments-title').innerText = `Comments (${comments.length})`;
          clearForm();
        }
      });
  });
  return form;
}

export default addCommentElement;