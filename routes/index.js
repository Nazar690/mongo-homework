const userRoutes = require('./user.route');
const articl = require('./articl.route');
const express = require('express');
const router = express.Router();

router.use('/user', userRoutes);
router.use('/articl', articl);

module.exports = router;
