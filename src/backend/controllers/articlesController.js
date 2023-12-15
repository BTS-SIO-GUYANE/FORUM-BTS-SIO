/**
 * @desc    Get Articles
 * @route   GET /api/status
 * @access  Public
 */

 const getArticles = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const putArticles = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}
 
 const deletetArticles = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const updateArticles = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

export { getArticles };
export { putArticles };
export { deletetArticles };
export { updateArticles };