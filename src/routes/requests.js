import express from 'express';

import auth from '../middleware/auth.js';
import {
    getFriendRequests,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    removeUserFromFollowing,
} from '../controllers/requests.js';

const router = express.Router();

router.post('/:id/getfriendrequests', auth, getFriendRequests);

router.patch('/:id/sendfriendrequest', auth, sendFriendRequest);

router.patch('/:id/acceptfriendrequest', auth, acceptFriendRequest);

router.patch('/:id/declinefriendrequest', auth, declineFriendRequest);

router.patch('/:id/removefollower', auth, removeUserFromFollowing);

export default router;
