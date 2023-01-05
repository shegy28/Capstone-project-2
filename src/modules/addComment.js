import getComments, { storeComment, fillCommentsList } from './comments.js';
import countComments from './countComments.js';

const addTitleElement = (parentElement) => {
  const h2 = document.createElement('h2');
  h2.innerText = 'Add a comment';
  parentElement.appendChild(h2);
};

const addNameTextBox = (parentElement) => {
  const input = document.createElement('input');
  input.id = 'username';
  input.name = 'username';
  input.type = 'text';
  input.placeholder = 'Your name';
  input.required = true;
  parentElement.appendChild(input);
};

const addCommentTextBox = (parentElement) => {
  const input = document.createElement('input');
  input.id = 'comment';
  input.type = 'text';
  input.name = 'comment';
  input.placeholder = 'Your insights';
  input.required = true;
  parentElement.appendChild(input);
};

const addSubmitButton = (parentElement) => {
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.id = 'submit';
  submit.value = 'Comment';
  parentElement.appendChild(submit);
};

const addFormElement = (foodId) => {
  const form = document.createElement('form');
  form.id = 'add-comment';
  addTitleElement(form);
  addNameTextBox(form);
  addCommentTextBox(form);
  addSubmitButton(form);

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
          clearForm();
          document.querySelector('#comments-title').innerText = `Comments (${countComments(ul)})`;
        }
      });
  });
  return form;
};

export default addFormElement;