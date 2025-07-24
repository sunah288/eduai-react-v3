import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';

// 이미지 업로드 설정
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'admin-uploads',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});
export const upload = multer({ storage: imageStorage });

// 영상 업로드 설정
const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    resource_type: 'video',
    folder: 'admin-videos',
    allowed_formats: ['mp4', 'mov', 'webm', 'mkv'],
  },
});
export const uploadVideo = multer({ storage: videoStorage });
