import User from "../models/user.js";

export const searchUsers = async (req, res) => {
  const searchTerm = req.query.searchterm;
  const limit = req.query.limit;
  console.log(searchTerm);
  console.log(limit);

  try {
    const users = await User.find({
      name: { $regex: searchTerm, $options: "i" },
    });

    let limitUsers;

    if (limit > users.length) {
      limitUsers = users.slice(0, limit - 1);
    } else {
      limitUsers = users;
    }

    console.log;

    res.status(200).json(limitUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
