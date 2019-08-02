const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/', userController.createUser);
router.put('/:userid', userController.editUser)
router.get('/:userid', userController.getUser);
router.delete('/:userid', userController.removeUser);
router.get('/:userid/articles', userController.getArticles);


module.exports = router;