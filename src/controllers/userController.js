const Document = require('../models/Document')

const dashboard = async (req, res) => {
    const { _id } = req.user

    const documents = await Document.find({ userId: _id }).lean()
    
    res.status(200).render('user/dashboard', {
        msg: req.flash('msg'),
        documents: documents,
        user: req.user
    })
}


module.exports = {
    dashboard
}