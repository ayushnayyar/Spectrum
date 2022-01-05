import express from 'express';
import auth from '../middleware/auth.js';

import { getFollowing, getFollowers } from '../controllers/people.js';

const router = express.Router();

router.post('/:id/getfollowing', auth, getFollowing);

router.post('/:id/getfollowers', auth, getFollowers);

export default router;
