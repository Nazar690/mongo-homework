const { articl } = require('../models');

module.exports = {
    createArticl,
    editArticle,
    filterArticle,
    deleteArticle
}

async function createArticl(req, res, next) {
    const article = new articl({
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        category: req.body.category,
        owner: req.body.owner,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt
    })
    try {
        const newArticle = await article.save()
        res.json(newArticle)
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }

}

async function editArticle(req, res, next) {
    try {
        let article = await articl.findById(req.params.articleId);
        req.body.title !== null ? article.title = req.body.title : null;
        req.body.subtitle !== null ? article.subtitle = req.body.subtitle : null;
        req.body.description !== null ? article.description = req.body.description : null;
        req.body.category !== null ? article.category = req.body.category : null;
        req.body.createdAt !== null ? article.createdAt = req.body.createdAt : null;
        req.body.updatedAt !== null ? article.updatedAt = req.body.updatedAt : null;
        const updatedArticle = await article.save()
        res.json(updatedArticle)
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
}

function filterArticle(req, res, next) {
    articl.find()
    .populate('owner')
    .exec(function (err, article) {
        if (err) return err;
        res.json(article);
    })
}

async function deleteArticle(req, res, next) {
    try {
        let article = await articl.findById(req.params.articleId);
        if (article == null) {
            return res.status(404).json({
                message: "Cannot find..."
            })
        }
        article.remove();
        res.json({
            message: "Article was deleted"
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}