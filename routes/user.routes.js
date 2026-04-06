
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', controller.getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', controller.createUser);

router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
