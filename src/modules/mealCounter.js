const counter = (div, count) => {
  if (count.length !== 0) {
    div.innerHTML = `MEALS(${count.length})`;
  } else {
    div.innerHTML = 'No meals added';
  }
};

export default counter;