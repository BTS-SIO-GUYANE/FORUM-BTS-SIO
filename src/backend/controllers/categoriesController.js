/**
 * @desc    Get Articles
 * @route   GET /api/status
 * @access  Public
 */

import prisma from '../utils/prisma.js';

 const getCategories = async(req, res) => {
    const categories = await prisma.categorie.findMany(
        {
            orderBy: {
                date: 'desc'
            }
        }
    );
  
    console.log('categories:',ar)
    res.json({ status: 'ok',categories });
}

  
 const deleteCategories = async (req, res) => {
    const categories = await prisma.categorie.delete({
        where: {
            id: parseInt(req.query.id)
        }
    });
    console.log('categories:',categories)
    res.json({ status: 'ok', titre: categories.titre });
}



const createCategories = async (req, res) => {
    const article = await prisma.categorie.create({
        data: {
          titre: req.body.titre,
          date: new Date(),
          contenu: req.body.content
        }
    })
    console.log('article:',article)
    res.json({ status: 'ok' });
}

const putCategories = async (req, res) => {
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
    console.log('article:',categorie)
    res.json({ status: 'ok' , categorie});
}
const getCategorie = async (req, res) => {
    const article = await prisma.categorie.findUnique({
        where: {
            id: parseInt(req.query.id)
        }
    })
    res.json({ status: 'ok' });
}


export { getCategories, deleteCategories, createCategories, putCategories, getCategorie };

