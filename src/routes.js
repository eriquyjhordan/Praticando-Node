const { Router } = require('express');
const posts = require('./data');

const routes = Router();

routes.get('/posts', (request, response) => {
  return response.status(200).json(posts);
})

routes.get('/posts/:id', (request, response) => {
  const { id } = request.params;
  const searchId = posts.find(post => post.id === parseInt(id));
  if(!searchId) {
    return response.status(404).send({error: 'Id not found'});
  }
  return response.status(200).send(searchId);
});

module.exports = routes;
