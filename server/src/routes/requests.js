import express from "express";

import auth from "../middleware/auth.js";
import {
  getFollowRequests,
  getFollowingRequests,
  getFollowing,
  getFollowers,
  sendFollowingRequest,
  acceptFollowRequest,
  removeFromFollowing,
  removeFromFollowers,
  declineFollowRequest,
  deleteFollowingRequest,
} from "../controllers/requests.js";

const router = express.Router();

router.get("/:id/get-follow-requests", auth, getFollowRequests);

router.get("/:id/get-following-requests", auth, getFollowingRequests);

router.get("/:id/get-followers", auth, getFollowers);

router.get("/:id/get-following", auth, getFollowing);

router.patch("/:id/send-following-request", auth, sendFollowingRequest);

router.patch("/:id/delete-following-request", auth, deleteFollowingRequest);

router.patch("/:id/accept-follow-request", auth, acceptFollowRequest);

router.patch("/:id/decline-follow-request", auth, declineFollowRequest);

router.patch("/:id/remove-from-following", auth, removeFromFollowing);

router.patch("/:id/remove-from-followers", auth, removeFromFollowers);

export default router;
