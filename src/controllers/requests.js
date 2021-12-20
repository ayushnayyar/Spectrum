import mongoose from 'mongoose';

import User from '../models/user.js';

export const getFriendRequests = async (req, res) => {
    const { id } = req.params;
    try {
        if (!req.userId) {
            return res.json({ message: 'Unauthenticated' });
        }

        const user = await User.findOne({ _id: id });

        const friendRequestData = await Promise.all(
            user.friendRequests.map(async (friendId) => {
                const friend = await User.findOne({ _id: friendId });
                return { name: friend.name, id: friendId };
            })
        );

        res.status(201).json(friendRequestData);
    } catch (error) {
        res.sendStatus(404).json({ message: 'Something went wrong' });
    }
};

export const sendFriendRequest = async (req, res) => {
    const { id } = req.params;
    const { friendId } = req.body;

    try {
        if (!req.userId) {
            return res.json({ message: 'Unauthenticated' });
        }

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        const friendsIndex = await user.friends.findIndex(
            (id) => id === String(friendId)
        );

        const friendRequestsIndex = await user.friendRequests.findIndex(
            (id) => id === String(friendId)
        );

        if (friendsIndex === -1 && friendRequestsIndex === -1) {
            user.friendRequests.push(friendId);
        }

        const updatedUser = await User.findByIdAndUpdate(id, user, {
            new: true,
        });

        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const acceptFriendRequest = async (req, res) => {
    const { id } = req.params;
    const { friendId } = req.body;

    try {
        if (!req.userId) {
            return res.json({ message: 'Unauthenticated' });
        }

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        const friendsIndex = await user.friends.findIndex(
            (id) => id === String(friendId)
        );

        const friendRequestsIndex = await user.friendRequests.findIndex(
            (id) => id === String(friendId)
        );

        if (friendsIndex === -1 && friendRequestsIndex !== -1) {
            console.log('In');
            user.friends.push(String(friendId));
            user.friendRequests = user.friendRequests.filter(
                (friendRequest) => {
                    return friendRequest !== String(friendId);
                }
            );
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: { user } },
            {
                new: true,
            }
        );

        res.status(201).send(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const declineFriendRequest = async (req, res) => {
    const { id } = req.params;
    const { friendId } = req.body;

    try {
        if (!req.userId) {
            return res.json({ message: 'Unauthenticated' });
        }

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        const friendRequestsIndex = await user.friendRequests.findIndex(
            (id) => id === String(friendId)
        );

        console.log(friendRequestsIndex);

        if (friendRequestsIndex !== -1) {
            user.friendRequests = user.friendRequests.filter(
                (friendRequest) => {
                    return friendRequest !== String(friendId);
                }
            );
        }

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: { user } },
            {
                new: true,
            }
        );

        res.status(201).send(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
