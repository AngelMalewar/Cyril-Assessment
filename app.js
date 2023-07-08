const express = require('express');
const app = express();
const config = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/auth', authRoutes);
app.use('/course', courseRoutes);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
