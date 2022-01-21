import User from "../models/user.js";

export const getFollowing = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });
    const following = await Promise.all(
      user.following.map((followingUser) => {
        return User.findOne({ _id: followingUser });
      })
    );

    console.log(following);

    res.status(200).json(following);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addToFollowingRequests = async (req, res) => {
  const { id } = req.params;
  const { userToAdd } = req.body;

  try {
    const user = await User.findOne({ _id: id });
  } catch (eroor) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getFollowers = async (req, res) => {};
