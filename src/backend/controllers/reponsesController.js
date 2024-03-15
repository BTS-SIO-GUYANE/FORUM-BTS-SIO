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

 const updateReponses = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

export { getReponses };
export { putReponses };
export { deleteReponses};
export { updateReponses};