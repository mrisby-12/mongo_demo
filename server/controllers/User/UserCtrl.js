const User = require('./User')

module.exports = {
  addUser(req, res){
    new User(req.body).save(() => {
      if (err) {
        return res.status(500).json(err)
      }
      return res.status(200).json(user)
    })
  },
  getUsers(req, res){
    User.find((err, users) => {
      if (err) return res.status(500).json(err)
      else return res.status(200).json(users)
    })
  },
  getUser(req, res){
    User.findOne({ id: req.params.id }, (err, user) => {
      if (err) return res.status(500).json(err)
      else return res.status(200).json(user)
    })
  },
  updateUser(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
      if (err) return res.status(500).json(err)
      else return res.status(200).json(users)
    })
  },
  deleteUser(req, res){
    User, findByIdAndRemove(req.params.id, (err, user) => {
      if (err) return res.status(500).json(err)
      else return res.status(200).json(users)
    })
  }
}