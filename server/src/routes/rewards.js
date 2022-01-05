import express from 'express';
import auth from '../middleware/auth.js';

import { fetchRewards } from '../controllers/rewards.js';

const router = express.Router();

router.get('/:id', auth, fetchRewards);

export default router;
