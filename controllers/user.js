const { users } = require('../models')

module.exports = {
  createUser,
  editUser,
  getUser,
  removeUser,
  getArticles
};

async function createUser(req, res, next) {
  const user = new users({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
    createdAt: req.body.createdAt,
    numberOfArticles: req.body.numberOfArticles,
    nickname: req.body.nickname
  })
  try {
    const newUser = await user.save()
    res.json(newUser)
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }

}

async function editUser(req, res, next) {
  try {
    let user = await users.findById(req.params.userid);
    if (user == null) {
      return res.status(404).json({
        message: "Cannot find..."
      })
    }
    user.firstName = req.body.firstName
    res.json(user)
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}

async function getUser(req, res, next) {
  try {
    let user = await users.findById(req.params.userid);
    req.body.firstName !== null ? user.firstName = req.body.firstName : null;
    req.body.lastName !== null ? user.lastName = req.body.lastName : null;
    req.body.role !== null ? user.role = req.body.role : null;
    req.body.createdAt !== null ? user.createdAt = req.body.createdAt : null;
    req.body.nickname !== null ? user.nickname = req.body.nickname : null;
    const updatedUser = await user.save()
    res.json(updatedUser)
  } catch (err) {
    return res.status(400).json({
      message: err.message
    })
  }
}


async function removeUser(req, res, next) {
  try {
    let user = await users.findById(req.params.userid);
    if (user == null) {
      return res.status(404).json({
        message: "Cannot find..."
      })
    }
    user.remove();
    res.json({
      message: "User was deleted"
    })
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
}

function getArticles(req, res, next) {
  return res.json({
    articles: true
  })
}