
// server/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import adminRoutes from './routes/admin.js';
import authRoutes from './routes/auth.js';
import courseRoutes from './routes/courses.js';
// import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();
const whitelist = [
  'http://localhost:5173',                   // 로컬 개발 주소
  'https://eduai-react-v3.vercel.app'     // 배포된 프론트엔드 주소
];
const app = express();
app.use(cors({ origin: whitelist, credentials: true }));
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(cors({ origin: 'https://eduai-react-v3.vercel.app', credentials: true }));
app.use(express.json());

// 라우터 연결
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes); // /api/courses, /api/favorites

// ✅추가 업로드 라우터 연결
// app.use('/api', uploadRoutes);
app.use('/api/admin', adminRoutes);

// DB 연결 후 서버 실행
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB 연결 성공');
    app.listen(5000, () => {
      console.log('✅ 서버 실행 중: http://localhost:5000');
    });
  })
  .catch((err) => console.error('❌ DB 연결 실패:', err));