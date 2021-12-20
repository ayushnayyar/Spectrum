import express from 'express';

import auth from '../middleware/auth.js';
import { signIn, signUp } from '../controllers/users.js';

import {
    getFriendRequests,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
} from '../controllers/requests.js';

const router = express.Router();

router.post('/signin', signIn);

router.post('/signup', signUp);

router.post('/:id/getfriendrequests', auth, getFriendRequests);

router.patch('/:id/sendfriendrequest', auth, sendFriendRequest);

router.patch('/:id/acceptfriendrequest', auth, acceptFriendRequest);

router.patch('/:id/declinefriendrequest', auth, declineFriendRequest);

export default router;
