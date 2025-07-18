// server/routes/admin.js
import express from 'express';
import isAuth from '../middlewares/authMiddleware.js';
import isAdmin from '../middlewares/isAdmin.js';
import upload from '../middlewares/cloudinaryUploader.js';
import { getDashboardStats, getAllUsers } from '../controllers/adminController.js';
import { uploadImage, getImages } from '../controllers/adminController.js';

const router = express.Router();

router.use(isAuth, isAdmin); // 인증 + 관리자 권한 필수

router.get('/dashboard', getDashboardStats);
router.get('/users', getAllUsers);
router.post('/upload-image', upload.single('file'), uploadImage);         // ✅✅✅ ← 추가할 부분
router.get('/images', getImages);  

export default router;
// 