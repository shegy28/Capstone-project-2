const countComments = (listElement) => {
  return listElement.getElementsByTagName('li').length;
}

export default countComments;