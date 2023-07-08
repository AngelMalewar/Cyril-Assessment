const Course = require('../models/Course');

exports.getCoursePage = (req, res) => {
    // Fetch course data from MongoDB and render the coursePage.ejs view
    Course.find({}, (err, courses) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.render('coursePage', { courses });
    });
};
