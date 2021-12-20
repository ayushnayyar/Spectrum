import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import User from '../models/user.js';

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);

    try {
        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        console.log(isPasswordCorrect);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            {
                email: existingUser.email,
                id: existingUser._id,
            },
            // Generate strong secret and store in env
            'test',
            { expiresIn: '1h' }
        );

        console.log(token);

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export const signUp = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName, terms } =
        req.body;

    try {
        const existingUser = User.findOne({ email: email });

        if (!existingUser) {
            console.log(existingUser);
            return res.status(400).json({ message: 'User already exists' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        if (!terms) {
            return res.status(400).json({ message: 'Terms not accepted' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`,
        });

        const token = jwt.sign(
            {
                email: result.email,
                id: result._id,
            },
            // Same secret as sign in (change later)
            'test',
            { expiresIn: '1h' }
        );

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
