import Post from '../models/post.js';
import User from '../models/user.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    const id = req.userId;

    try {
        let userPosts = [];
        const user = await User.findOne({ _id: id });

        if (user.posts) {
            user.posts.map((post) => userPosts.push(post));
        }

        const followingPosts = await Promise.all(
            user.following.map(async (followingUser) => {
                const following = await User.findOne({ _id: followingUser });
                console.log(following.posts);
                return following.posts.map((post) => userPosts.push(post));
                // userPosts.push(following.posts);
            })
        );

        // posts = await Post.find();

        userPosts.sort((a, b) => b.createdAt - a.createdAt);

        res.status(200).json(userPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getUserPosts = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({ _id: id });

        res.status(200).json(user.posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const post = req.body;
    // const { id } = req.params;

    const newPost = new Post({
        ...post,
        creator: req.userId,
    });

    try {
        await newPost.save();

        const user = await User.findOne({ _id: req.userId });
        user.posts = [...user.posts, newPost];

        const updatedUser = await User.findByIdAndUpdate(req.userId, user, {
            new: true,
        });

        console.log(updatedUser);

        res.status(201).json(newPost);
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    const updatedPost = await Post.findByIdAndUpdate(_id, post, {
        new: true,
    });

    res.send(201).json(updatedPost);
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post with that id');
    }

    await Post.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: 'Unauthenticated' });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post with that id');
    }

    const post = await Post.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) {
        // Like
        post.likes.push(req.userId);
    } else {
        //Dislike
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

    res.status(201).json(updatedPost);
};
