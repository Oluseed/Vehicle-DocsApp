const User = require('../models/User')

const index = async (req, res) => {
    res.status(200).render('home', {
        msg: req.flash('err-msg'),
        user: req.user
    })
}


module.exports = {
    index
}