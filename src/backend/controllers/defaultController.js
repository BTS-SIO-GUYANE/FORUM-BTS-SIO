/**
 * @desc    Get Status
 * @route   GET /api/status
 * @access  Public
 */
const getStatus = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const getMembres = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const getCategories = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const getRubriques = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const getReponses = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}

const getArticles = (req, res) => {
    console.log('test', req.query)
    res.json({ status: 'ok' });
}
// const getStatus = function(req, res) {
//     return res.status(200).json({ status: 'ok' });
// }

// function getStatus(req, res) {
//     return res.status(200).json({ status: 'ok' });
// }

export { getStatus, getMembres, getCategories, getRubriques, getReponses, getArticles };

