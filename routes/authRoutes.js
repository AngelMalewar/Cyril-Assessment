const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signin', authController.getSignInPage);
router.post('/signin', authController.signIn);
router.get('/google', authController.signInWithGoogle);

module.exports = router;
