/**
 * @desc    Get Categories
 * @route   GET /api/status
 * @access  Public
 */

 const getCategories = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const putCategories = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const deleteCategories = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const updateCategories = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

export { getCategories };
export { putCategories };
export { deleteCategories };
export { updateCategories };

