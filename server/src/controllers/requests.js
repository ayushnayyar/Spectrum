import User from "../models/user.js";

export const getFollowRequests = async (req, res) => {
  const { id } = req.params;

  try {
    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });
    console.log(user.followRequests);

    const followRequestsData = await Promise.all(
      user.followRequests.map(async (followRequesterId) => {
        const followRequester = await User.findOne({ _id: followRequesterId });
        return { name: followRequester.name, id: followRequesterId };
      })
    );

    if (followRequestsData.length === 0) {
      return res.status(201).json({ message: "No follow requests" });
    }

    res.status(201).json(followRequestsData);
  } catch (error) {
    res.sendStatus(404).json({ message: "Something went wrong" });
  }
};

export const getFollowingRequests = async (req, res) => {
  const { id } = req.params;

  try {
    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });
    console.log(user.followRequests);

    const followRequestsData = await Promise.all(
      user.followRequests.map(async (followRequesterId) => {
        const followRequester = await User.findOne({ _id: followRequesterId });
        return { name: followRequester.name, id: followRequesterId };
      })
    );

    if (followRequestsData.length === 0) {
      return res.status(201).json({ message: "No friend requests" });
    }

    res.status(201).json(followRequestsData);
  } catch (error) {
    res.sendStatus(404).json({ message: "Something went wrong" });
  }
};

export const sendFollowingRequest = async (req, res) => {
  const { id } = req.params;
  const { followingId } = req.body;

  try {
    const followingUserId = String(followingId);

    console.log(followingUserId);

    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const followingUserIndex = await user.following.indexOf(followingUserId);

    const followingRequestsIndex = await user.followingRequests.indexOf(
      followingUserId
    );

    const followingUser = await User.findOne({ _id: followingUserId });

    if (!followingUser) {
      return res
        .status(404)
        .json({ message: "User to send following request doesn't exist" });
    }

    const followerIndex = await followingUser.followers.indexOf(id);

    const followerRequestsIndex = await followingUser.followRequests.indexOf(
      id
    );

    if (
      followingUserIndex === -1 &&
      followingRequestsIndex === -1 &&
      followerIndex === -1 &&
      followerRequestsIndex === -1
    ) {
      user.followingRequests.push(followingUserId);
      followingUser.followRequests.push(id);
    } else {
      return res
        .status(201)
        .json({ message: "Already requested or following" });
    }

    await User.findByIdAndUpdate(id, user);

    await User.findByIdAndUpdate(followingUserId, followingUser);

    res.status(201).json(user.followingRequests);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteFollowingRequest = async (req, res) => {
  const { id } = req.params;
  const { removeRequestToUser } = req.body;

  try {
    const removeRequestToUserId = String(removeRequestToUser);

    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });
    const cancelFollowingRequestToUser = await User.findOne({
      _id: removeRequestToUserId,
    });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    if (!cancelFollowingRequestToUser) {
      return res
        .status(404)
        .json({ message: "User to send following request doesn't exist" });
    }

    const isRequestAlreadyFulfilled = await user.following.indexOf(
      removeRequestToUserId
    );

    const isRequestStillPending = await user.followingRequests.indexOf(
      removeRequestToUserId
    );

    const hasOtherUserAcceptedRequest =
      await cancelFollowingRequestToUser.followers.indexOf(id);

    const isOtherUsersRequestPending =
      await cancelFollowingRequestToUser.followRequests.indexOf(id);

    console.log(
      isRequestAlreadyFulfilled,
      isRequestStillPending,
      hasOtherUserAcceptedRequest,
      isOtherUsersRequestPending
    );

    if (
      isRequestAlreadyFulfilled === -1 &&
      isRequestStillPending !== -1 &&
      hasOtherUserAcceptedRequest === -1 &&
      isOtherUsersRequestPending !== -1
    ) {
      user.followingRequests = user.followingRequests.filter(
        (followingRequest) => followingRequest !== removeRequestToUserId
      );
      cancelFollowingRequestToUser.followRequests =
        cancelFollowingRequestToUser.followRequests.filter(
          (followRequest) => followRequest !== id
        );
    } else {
      return res.status(201).json({ message: "Already deleted or following" });
    }

    console.log(user.followingRequests);
    console.log(cancelFollowingRequestToUser.followRequests);

    await User.findByIdAndUpdate(id, user);

    await User.findByIdAndUpdate(
      removeRequestToUserId,
      cancelFollowingRequestToUser
    );

    res.status(201).json({ message: "Following request deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const acceptFollowRequest = async (req, res) => {
  const { id } = req.params;
  const { followRequestSender } = req.body;

  try {
    const followRequestSenderId = String(followRequestSender);

    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });
    const followRequestIssuer = await User.findOne({
      _id: followRequestSenderId,
    });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    // Does the user have the follow request sender in their followers
    const followRequestSenderIndex = await user.followers.indexOf(
      followRequestSenderId
    );

    // Does the user have the follow request from the follow request sender in their follow requests
    const followRequestSenderFollowRequestIndex =
      await user.followRequests.indexOf(followRequestSenderId);

    // Does the follow request issuer have the follow request receiver in their following
    const followRequestReceiverIndex =
      await followRequestIssuer.following.indexOf(id);

    // Does the follow request issuer have the follow request receiver in their following requests
    const followRequestReceiverFollowingRequests =
      followRequestIssuer.followingRequests.indexOf(id);

    console.log(
      followRequestSenderIndex,
      followRequestSenderFollowRequestIndex,
      followRequestReceiverIndex,
      followRequestReceiverFollowingRequests
    );

    if (
      followRequestSenderIndex === -1 &&
      followRequestSenderFollowRequestIndex !== -1 &&
      followRequestReceiverIndex === -1 &&
      followRequestReceiverFollowingRequests !== -1
    ) {
      user.followers.push(followRequestSenderId);
      user.followRequests = user.followRequests.filter((followRequest) => {
        return followRequest !== followRequestSenderId;
      });

      followRequestIssuer.following.push(id);
      followRequestIssuer.followingRequests = user.followingRequests.filter(
        (followingRequest) => {
          return followingRequest !== id;
        }
      );
    } else {
      return res
        .status(201)
        .json({ message: "Already accepted or something went wrong" });
    }

    await User.findByIdAndUpdate(id, user);
    await User.findByIdAndUpdate(followRequestSenderId, followRequestIssuer);

    res.status(201).json({ message: "Follow request accepted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const declineFollowRequest = async (req, res) => {
  const { id } = req.params;
  const { followRequestSender } = req.body;

  try {
    const followRequestSenderId = String(followRequestSender);

    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const followRequestSenderIndex = await user.followers.indexOf(
      followRequestSenderId
    );

    const followRequestSenderFollowRequestIndex =
      await user.followRequests.indexOf(followRequestSenderId);

    const followRequestIssuer = await User.findOne({
      _id: followRequestSenderId,
    });

    const followRequestReceiverIndex =
      await followRequestIssuer.following.indexOf(id);

    const followRequestReceiverFollowingRequests =
      followRequestIssuer.followingRequests.indexOf(id);

    console.log(
      followRequestSenderIndex,
      followRequestSenderFollowRequestIndex,
      followRequestReceiverIndex,
      followRequestReceiverFollowingRequests
    );

    if (
      followRequestSenderIndex === -1 &&
      followRequestSenderFollowRequestIndex !== -1 &&
      followRequestReceiverIndex === -1 &&
      followRequestReceiverFollowingRequests !== -1
    ) {
      user.followRequests = user.followRequests.filter((followRequest) => {
        return followRequest !== followRequestSenderId;
      });

      followRequestIssuer.followingRequests = user.followingRequests.filter(
        (followingRequest) => {
          return followingRequest !== id;
        }
      );
    } else {
      return res
        .status(201)
        .json({ message: "Already declined or something went wrong" });
    }

    await User.findByIdAndUpdate(id, user);
    await User.findByIdAndUpdate(followRequestSenderId, followRequestIssuer);

    res.status(201).json({ message: "Follow request declined" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFromFollowing = async (req, res) => {
  const { id } = req.params;
  const { removeUser } = req.body;

  try {
    const removeUserId = String(removeUser);

    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });
    const userToRemoveFromFollowing = await User.findOne({ _id: removeUserId });

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const userIndex = userToRemoveFromFollowing.followers.indexOf(id);
    const userToRemoveIndex = user.following.indexOf(removeUserId);

    if (userIndex !== -1 && userToRemoveIndex !== -1) {
      user.following = user.following.filter(
        (userId) => userId !== removeUserId
      );
      userToRemoveFromFollowing.followers =
        userToRemoveFromFollowing.followers.filter(
          (follower) => follower !== id
        );
    } else {
      return res
        .status(201)
        .json({ message: "Already removed or something went wrong" });
    }

    await User.findByIdAndUpdate(id, user);
    await User.findByIdAndUpdate(removeUserId, userToRemoveFromFollowing);

    res.status(201).json({ message: "User removed from following" });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFromFollowers = async (req, res) => {
  const { id } = req.params;
  const { removeUser } = req.body;

  try {
    const removeUserId = String(removeUser);
    if (!req.userId) {
      return res.json({ message: "Unauthenticated" });
    }

    const user = await User.findOne({ _id: id });
    const userToRemoveFromFollowers = await User.findOne({ _id: removeUserId });

    console.log(user._id);

    if (!user) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const userIndex = userToRemoveFromFollowers.following.indexOf(id);
    const userToRemoveIndex = user.followers.indexOf(removeUserId);

    if (userIndex !== -1 && userToRemoveIndex !== -1) {
      user.followers = user.followers.filter(
        (userId) => userId !== removeUserId
      );
      userToRemoveFromFollowers.following =
        userToRemoveFromFollowers.following.filter(
          (following) => following !== id
        );
    } else {
      return res
        .status(201)
        .json({ message: "Already removed or something went wrong" });
    }

    await User.findByIdAndUpdate(id, user);
    await User.findByIdAndUpdate(removeUserId, userToRemoveFromFollowers);

    res.status(201).json({ message: "User removed from followers" });
  } catch (error) {
    console.log(error.message);
  }
};
