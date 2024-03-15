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

const updateMembres = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

export { getMembres };
export { putMembres };
export { deleteMembres };
export { updateMembres };