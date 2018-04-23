const { addUser, getUsers, getUser, updateUser, deleteUser } = require('./controllers/User/UserCtrl')

module.exports = function routes (app){
  app.post('/api/users', addUser)
  app.get('/api/users', getUsers)
  app.get('/api/users/:id', getUser)
  app.put('/api/user/:id', updateUser)
  app.delete('/api/users/:id', deleteUser)
}