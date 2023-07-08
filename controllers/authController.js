const User = require('../models/User');
// Include additional packages for JWT and Google OAuth if necessary

exports.getSignInPage = (req, res) => {
    res.render('signInPage');
};

exports.signIn = (req, res) => {
    const { name, email, password } = req.body;

    // Check if email already exists in the database
    User.findOne({ email }, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (user) {
            return res.status(409).json({ message: 'Email id already exists' });
        }

        // Create a new user
        const newUser = new User({ name, email, password });
        newUser.save((err, savedUser) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            // Generate and send JWT token
            const token = generateToken(savedUser);
            res.cookie('token', token); // Store the token in a cookie

            // Redirect to page-2 (Fig2)
            res.redirect('/course/page-1');
        });
    });
};

exports.signInWithGoogle = (req, res) => {
    // Implement Google OAuth authentication flow
    // Handle user creation or retrieval from MongoDB
    // Generate and send JWT token
};
