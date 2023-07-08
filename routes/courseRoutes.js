const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers');

router.get('/page-1', courseController.getCoursePage);

module.exports = router;
