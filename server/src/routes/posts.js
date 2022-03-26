import express from 'express';

import auth from '../middleware/auth.js';
import {
    getPosts,
    getUserPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', auth, getPosts);

router.post('/:id', auth, getUserPosts);

router.post('/', auth, createPost);

router.patch('/:id', auth, updatePost);

router.delete('/:id', auth, deletePost);

router.patch('/:id/likepost', auth, likePost);

export default router;
