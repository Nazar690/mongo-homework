const express = require('express');
const router = express.Router();
const articlsControler = require('../controllers/articl');

router.post('/', articlsControler.createArticl);
router.put('/:articleId', articlsControler.editArticle);
router.get('/', articlsControler.filterArticle);
router.delete('/:articleId', articlsControler.deleteArticle);

module.exports = router;