import express from 'express';
import authController from '../controllers/auth.js';

const router = express.Router();
router.post("/signin", authController.login);

router.post("/signup", authController.register);

export default router;