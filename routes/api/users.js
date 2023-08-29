const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const categoriesCtrl = require('../../controllers/categories');
const transactionCtrl = require('../../controllers/categories');
const labelCtrl = require('../../controllers/categories');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

router.post('/controllers/categories', categoriesCtrl.create_Categories);

router.get('/controllers/categories', categoriesCtrl.get_Categories);

router.post('/controllers/categories', transactionCtrl.create_Transaction);

router.get('/controllers/categories', transactionCtrl.get_Transaction);

router.delete('/controllers/categories', transactionCtrl.delete_Transaction);

router.get('/controllers/categories', labelCtrl.get_Labels);

module.exports = router;