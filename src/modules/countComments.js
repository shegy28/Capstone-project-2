export default function countComments (listElement) {
  return listElement.getElementsByTagName('li').length;
}

// module.exports = countComments;