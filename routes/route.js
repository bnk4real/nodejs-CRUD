const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', userController.getPGUser);
router.get('/:id', userController.getUserById);
router.post('/create-user', userController.createUser);
router.post('/update-user/:id', userController.updateUser);
router.post('/delete-user', userController.deleteUser);

module.exports = router;