import express from 'express';
import { ROUTES } from '../../shared/api/endpoint.js';
import userController from '../controllers/user.controller.mjs';

const router = express.Router();

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: 모든 사용자 조회
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: 사용자 목록
 *   post:
 *     summary: 사용자 생성
 *     tags: [Users]
 *     responses:
 *       201:
 *         description: 생성된 사용자
 */
router.get(ROUTES.USERS.ROOT, userController.getAllUsers);
router.post(ROUTES.USERS.ROOT, userController.createUser);

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     summary: 특정 사용자 조회
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 사용자 상세 정보
 */
router.get(ROUTES.USERS.DETAIL, userController.getUserById);

/**
 * @openapi
 * /api/users/{id}/{ath_no}:
 *   patch:
 *     summary: 사용자 권한 번호 수정
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: ath_no
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 수정 성공
 */
router.patch(ROUTES.USERS.ATH_NO, userController.updateUserAthNo);

export default router;
