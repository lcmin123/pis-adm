import express from 'express';
import { ROUTES } from '../../shared/api/endpoint.js';
import userController from '../controllers/user.controller.mjs';

const router = express.Router();

router.get(ROUTES.USERS.ROOT, userController.getAllUsers);
router.post(ROUTES.USERS.ROOT, userController.createUser);
router.get(ROUTES.USERS.DETAIL, userController.getUserById);
router.patch(ROUTES.USERS.ATH_NO, userController.updateUserAthNo);

export default router;
