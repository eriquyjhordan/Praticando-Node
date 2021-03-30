const { Router } = require('express');
const posts = require('./data');
const searchId = require('./controllers/searchId');

const routes = Router();

routes.get('/posts', (request, response) => {
  return response.status(200).json(posts);
})

routes.get('/posts/:id', (request, response) => {
  const { id } = request.params;
  try {
    const search = searchId(id);
    return response.status(200).send(search);
  } catch (error) {
    return response.status(404).send(error.message);
  }  
});

module.exports = routes;
