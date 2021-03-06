const posts = require('../data.json');

const searchId = (id) => {
  const search = posts.find(post => post.id === parseInt(id));
  if(!search) {
    throw new Error('Id not found');
  }
  return search;
}

module.exports = searchId;