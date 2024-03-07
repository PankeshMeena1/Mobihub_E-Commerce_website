
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
}));  

const dbConnect = require("./config/dbConnect");
const passport = require("./config/passwordconfig");
const cookieSession = require('cookie-session'); 
const authRouter = require('./routes/authRoute');
const {getUserData} = require("./controller/passport");
const {isAuthenticated} = require("./middlewares/loginmiddlewere");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;


dbConnect();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", authRouter);

app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
}));

app.use(passport.initialize());
app.use(passport.session());

// Google OAuth routes
app.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}));

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: "http://localhost:3000/admin_layout/Admin_dashboard",
        failureRedirect: '"http://localhost:3000/login',
    })
);

app.get("/apilogin/user/data", isAuthenticated,getUserData, async (req, res) => {
        try {
            const userData = await userdb.findOne({ googleId: req.user.googleId });
            res.status(200).json(userData);
        } catch (error) {
            console.error("Error fetching user data:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    });

// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
