const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const userdb = require("../models/user/loginwithgogl");

passport.use(new GoogleStrategy({
    clientID:"227090914571-jgcipra0lgrur59h9ivoq1b0vebflbed.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:5000/google/callback",
    scope: ['email', 'profile']
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await userdb.findOne({ googleId: profile.id });
        if (!user) {
            user = new userdb({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
                image: profile.photos[0].value
            });
            await user.save();
        }
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = passport;
