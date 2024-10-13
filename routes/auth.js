const express = require('express');
const router = express.Router();
const { login, selectTags } = require('../controllers/authController');

router.post('/login', login);

router.post('/select-tags', selectTags);

module.exports = router;
