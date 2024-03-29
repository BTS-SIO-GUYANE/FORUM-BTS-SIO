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
    // console.log('test', req.query)
    res.json({ status: 'ok', titre: articles.titre });
}

  
 const deleteArticles = async (req, res) => {
    const articles = await prisma.article.delete({
        where: {
            id: req.params.id
        }
    });
}

 const updateArticles = async (req, res) => {
    const articles = await prisma.article.update({
        where: {
            id: req.params.id
        },
        data: {
            titre: req.body.titre,
            contenu: req.body.content
        }
    })
    res.json({ status: 'ok' });
}

const createArticles = async (req, res) => {
    //console.log('test', req.query)
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



export { getArticles, deleteArticles, updateArticles, createArticles, putArticles };

