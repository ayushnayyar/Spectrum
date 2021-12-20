import express from 'express';

import auth from '../middleware/auth.js';
import {
    getFriendRequests,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
} from '../controllers/requests.js';

const router = express.Router();

router.post('/:id/getfriendrequests', auth, getFriendRequests);

router.patch('/:id/sendfriendrequest', auth, sendFriendRequest);

router.patch('/:id/acceptfriendrequest', auth, acceptFriendRequest);

router.patch('/:id/declinefriendrequest', auth, declineFriendRequest);

export default router;
