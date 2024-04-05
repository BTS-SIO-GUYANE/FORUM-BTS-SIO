/**
 * @desc    Get Reponses
 * @route   GET /api/status
 * @access  Public
 */

 const getReponses = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const putReponses = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const deleteReponses = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

 const createReponses = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

export { getReponses, putReponses, deleteReponses, createReponses };
