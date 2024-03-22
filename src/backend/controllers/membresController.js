/**
 * @desc    Get Membres
 * @route   GET /api/status
 * @access  Public
 */

const getMembres = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const putMembres = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const deleteMembres = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const createMembres = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}


export { getMembres, deleteMembres, deleteMembres, createMembres };
