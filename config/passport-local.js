const LocalStrategy = require('passport-local').Strategy
const User = require('../src/models/User')


module.exports = (passport) => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    async (req, email, password, done) => {
        try {
            const user = await User.findOne({ email }).lean()
            if(user) {
                const isMatch = user.password === password
                if (!isMatch) {
                    req.flash('err-msg', 'Incorrect password')
                    return done(null, false)
                } else {
                    return done(null, user)
                }
            } else {
                req.flash('err-msg', 'Email is not found')
                return done(null, false)
            }
        } catch (err) {
            return done(err, false)
        }
    }))
    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser(async (id, done) => {
        try {
            let user =  await User.findById(id).lean()
            return done(null, user)
        } catch (err) {
            return done(err, null)
        }
    })
}