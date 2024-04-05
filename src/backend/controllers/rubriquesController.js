/**
 * @desc    Get Rubriques
 * @route   GET /api/status
 * @access  Public
 */

 const getRubriques = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const putRubriques = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const deleteRubriques = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const createRubriques = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

export { getRubriques, putRubriques, deleteRubriques, createRubriques };
