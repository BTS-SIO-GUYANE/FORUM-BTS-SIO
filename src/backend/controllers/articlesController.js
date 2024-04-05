/**
 * @desc    Get Articles
 * @route   GET /api/status
 * @access  Public
 */

import prisma from '../utils/prisma.js';

 const getArticles = async(req, res) => {
    const articles = await prisma.article.findMany(
        {
            orderBy: {
                date: 'desc'
            }
        }
    );
  
    console.log('articles:',articles)
    res.json({ status: 'ok',articles });
}

const putArticles = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}
  
 const deleteArticles = async (req, res) => {
    const articles = await prisma.article.delete({
        where: {
            id: parseInt(req.query.id)
        }
    });
    console.log('articles:',articles)
    res.json({ status: 'ok', titre: articles.titre });
}

<<<<<<< HEAD
=======


>>>>>>> f71951c34f45870148f7172f4df6bd0be72704fc
const createArticles = async (req, res) => {
    const article = await prisma.article.create({
        data: {
          titre: req.body.titre,
          date: new Date(),
          contenu: req.body.content
        }
    })
    console.log('article:',article)
    res.json({ status: 'ok' });
}

const putArticles = async (req, res) => {
    const article = await prisma.article.update({
        where: {
            id: parseInt(req.query.id)
        },
        data: {
          titre: req.body.titre,
          date: new Date(),
          contenu: req.body.content
        }
    })
    console.log('article:',article)
    res.json({ status: 'ok' , article});
}
const getArticle = async (req, res) => {
    const article = await prisma.article.findUnique({
        where: {
            id: parseInt(req.query.id)
        }
    })
    res.json({ status: 'ok' });
}


<<<<<<< HEAD
export { getArticles, deleteArticles, createArticles, putArticles };

=======
export { getArticles, deleteArticles, createArticles, putArticles, getArticle };
>>>>>>> f71951c34f45870148f7172f4df6bd0be72704fc

