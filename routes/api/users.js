const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const categoriesCtrl = require('../../controllers/categories');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

router.post('/controllers/categories', categoriesCtrl.create_Categories);

router.get('/controllers/categories', categoriesCtrl.get_Categories);

module.exports = router;