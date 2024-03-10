const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const userdb = require("../models/user/loginwithgogl");
require('dotenv').config();

 const client_ID = process.env.CLIENT_ID;
 const client_Secret = process.env.CLIENT_SECRET;
 const call_back_URL= process.env.CALLBACK_URL;

passport.use(new GoogleStrategy({
    clientID:client_ID,
    clientSecret:client_Secret,
    callbackURL:call_back_URL,
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
