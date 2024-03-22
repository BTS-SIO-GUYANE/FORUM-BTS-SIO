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

  
 const deleteArticles = async (req, res) => {
    const articles = await prisma.article.delete({
        where: {
            id: parseInt(req.query.id)
        }
    });
    console.log('articles:',articles)
    res.json({ status: 'ok', titre: articles.titre });
}



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


export { getArticles, deleteArticles, createArticles, putArticles, getArticle };

