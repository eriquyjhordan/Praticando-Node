const express = require('express');

const app = express();

app.use(express.json());

const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
]

app.get('/posts', (request, response) => {
  return response.status(200).json(posts);
})

app.get('/posts/:id', (request, response) => {
  const { id } = request.params;
  const searchId = posts.find(item => item.id === parseInt(id));
  if(!searchId) {
    return response.status(404).send({error: 'Id not found'});
  }
  return response.status(200).send(searchId);
});

app.listen(3333, () => {
  console.log('Server is in the air');
});