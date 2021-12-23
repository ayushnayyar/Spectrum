import Post from '../models/post.js';
import User from '../models/user.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts.reverse());
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getUserPosts = async (req, res) => {
    // const { id } = req.params;
    try {
        const user = await User.findOne({ _id: req.userId });
        console.log(user);

        const posts = user.posts.map(
            async (post) => await Post.findOne({ _id: post })
        );

        console.log(posts);

        res.status(200).json(posts);
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
